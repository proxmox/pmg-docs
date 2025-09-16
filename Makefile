include /usr/share/dpkg/pkg-info.mk

DGDIR=.
ASCIIDOC_PMG=./asciidoc-pmg

BUILDDIR ?= $(DEB_SOURCE)-$(DEB_VERSION)
DSC=$(DEB_SOURCE)_$(DEB_VERSION).dsc

GEN_PACKAGE=pmg-doc-generator
DOC_PACKAGE=pmg-docs

GEN_DEB=$(GEN_PACKAGE)_$(DEB_VERSION_UPSTREAM_REVISION)_all.deb
DOC_DEB=$(DOC_PACKAGE)_$(DEB_VERSION_UPSTREAM_REVISION)_all.deb

export SOURCE_DATE_EPOCH ?= $(shell dpkg-parsechangelog -STimestamp)
SOURCE_DATE_HUMAN := $(shell date -d "@$(SOURCE_DATE_EPOCH)")


all: index.html

.PHONY: verify-images
verify-images: png-verify.pl
	for i in ./images/screenshot/*.png; do ./png-verify.pl $$i || :; done
	for i in ./images/installer/*.png; do ./png-verify.pl $$i || :; done

ADOC_SOURCES_GUESS=$(filter-out %-synopsis.adoc %-opts.adoc %-table.adoc, $(wildcard *.adoc))
.pmg-doc-depends link-refs.json: $(ADOC_SOURCES_GUESS) scan-adoc-refs
	./scan-adoc-refs *.adoc --depends .pmg-doc-depends.tmp > link-refs.json.tmp
	@cmp --quiet .pmg-doc-depends .pmg-doc-depends.tmp || mv .pmg-doc-depends.tmp .pmg-doc-depends
	@cmp --quiet link-refs.json link-refs.json.tmp || mv link-refs.json.tmp link-refs.json

pmg-doc-generator.mk: .pmg-doc-depends pmg-doc-generator.mk.in
	cat pmg-doc-generator.mk.in .pmg-doc-depends > $@.tmp
	sed -i "s/@RELEASE@$$/$(DEB_VERSION_UPSTREAM)/" $@.tmp
	mv $@.tmp $@

-include ./pmg-doc-generator.mk

GEN_DEB_SOURCES=				\
	pmg-doc-generator.mk			\
	$(MANUAL_SOURCES)			\
	docinfo.xml

GEN_SCRIPTS=					\
	gen-cluster.conf.5-opts.pl		\
	gen-fetchmail.conf.5-opts.pl		\
	gen-ldap.conf.5-opts.pl			\
	gen-pmg.conf.5-opts.pl			\
	gen-user.conf.5-opts.pl

API_VIEWER_FILES=							\
	api-viewer/apidata.js						\
	api-viewer/PMGAPI.js						\
	/usr/share/javascript/proxmox-widget-toolkit-dev/APIViewer.js

API_VIEWER_SOURCES=				\
	api-viewer/index.html			\
	api-viewer/apidoc.js

asciidoc-pmg: asciidoc-pmg.in link-refs.json
	cat asciidoc-pmg.in link-refs.json >asciidoc-pmg.tmp
	sed -e s/@RELEASE@/$(DOCRELEASE)/ -i asciidoc-pmg.tmp
	chmod +x asciidoc-pmg.tmp
	mv asciidoc-pmg.tmp asciidoc-pmg

INDEX_INCLUDES=								\
	pmg-admin-guide.pdf 						\
	pmg-admin-guide.epub 						\
	chapter-index-table.adoc					\
	man1-index-table.adoc						\
	man5-index-table.adoc						\
	man8-index-table.adoc						\
	$(sort $(addsuffix .html, $(MANUAL_PAGES)) $(CHAPTER_LIST))

ADOC_STDARG=-b $(shell pwd)/asciidoc/pmg-html -f asciidoc/asciidoc-pmg.conf -a icons -a data-uri -a "date=$(SOURCE_DATE_HUMAN)" -a "revnumber=$(DOCRELEASE)"

BROWSER?=xdg-open


README.html: README.adoc
	asciidoc -a toc $(ADOC_STDARG) -o $@ $<

.PHONY: index
index: index.html
	$(BROWSER) index.html &

chapter-index-table.adoc: asciidoc-pmg
	./asciidoc-pmg chapter-table >$@.tmp
	mv $@.tmp $@

man1-index-table.adoc: asciidoc-pmg
	./asciidoc-pmg man1page-table >$@.tmp
	mv $@.tmp $@

man5-index-table.adoc: asciidoc-pmg
	./asciidoc-pmg man5page-table >$@.tmp
	mv $@.tmp $@

man8-index-table.adoc: asciidoc-pmg
	./asciidoc-pmg man8page-table >$@.tmp
	mv $@.tmp $@

index.html: index.adoc $(API_VIEWER_SOURCES) $(INDEX_INCLUDES)
	asciidoc $(ADOC_STDARG) -o $@ index.adoc

pmg-admin-guide.html: $(PMG_ADMIN_GUIDE_ADOCDEPENDS)
	asciidoc -a pmglogo $(ADOC_STDARG) -o $@ pmg-admin-guide.adoc

pmg-admin-guide.chunked: $(PMG_ADMIN_GUIDE_ADOCDEPENDS)
	rm -rf $@.tmp $@
	mkdir $@.tmp
	a2x -D $@.tmp -a docinfo -a docinfo1 -a icons -f chunked pmg-admin-guide.adoc
	mv $@.tmp/$@ $@

PMG_DOCBOOK_CONF=-b $(shell pwd)/asciidoc/pmg-docbook -f asciidoc/asciidoc-pmg.conf
PMG_DBLATEX_OPTS='-p ./asciidoc/pmg-dblatex.xsl -s asciidoc/dblatex-custom.sty -c asciidoc/dblatex-export.conf'

YEAR:=$(shell date "+%Y")

pmg-admin-guide-docinfo.xml: pmg-admin-guide-docinfo.xml.in
	sed -e 's/@RELEASE@/$(DOCRELEASE)/' -e 's/@YEAR@/$(YEAR)/' <$< >$@

pmg-copyright.adoc: pmg-copyright.adoc.in
	sed -e 's/@YEAR@/$(YEAR)/' <$< >$@

pmg-admin-guide.pdf: $(PMG_ADMIN_GUIDE_ADOCDEPENDS) docinfo.xml pmg-admin-guide-docinfo.xml
	rsvg-convert -f pdf -o proxmox-logo.pdf images/proxmox-logo.svg
	rsvg-convert -f pdf -o proxmox-ci-header.pdf images/proxmox-ci-header.svg
	grep ">Release $(DOCRELEASE)<" pmg-admin-guide-docinfo.xml || (echo "wrong release in  pmg-admin-guide-docinfo.xml" && false);
	a2x -a docinfo -a docinfo1 -f pdf -L --asciidoc-opts="$(PMG_DOCBOOK_CONF)" --dblatex-opts $(PMG_DBLATEX_OPTS) pmg-admin-guide.adoc
	rm proxmox-logo.pdf proxmox-ci-header.pdf

pmg-admin-guide.epub: $(PMG_ADMIN_GUIDE_ADOCDEPENDS)
	rm -rf $@.tmp $@
	mkdir $@.tmp
	a2x -D $@.tmp -f epub --asciidoc-opts="$(PMG_DOCBOOK_CONF)" pmg-admin-guide.adoc
	mv $@.tmp/$@ $@

api-viewer/apidata.js: extractapi.pl
	./extractapi.pl >$@

api-viewer/apidoc.js: $(API_VIEWER_FILES)
	cat $(API_VIEWER_FILES) >$@.tmp
	mv $@.tmp $@

$(BUILDDIR):
	rm -rf $@ $@.tmp
	rsync -a * $@.tmp
	echo "git clone git://git.proxmox.com/git/pmg-docs.git\\ngit checkout $(shell git rev-parse HEAD)" > $@.tmp/debian/SOURCE
	mv $@.tmp $@

.PHONY: dinstall
dinstall: $(GEN_DEB) $(DOC_DEB)
	dpkg -i $(GEN_DEB) $(DOC_DEB)

.PHONY: dsc deb
dsc: $(DSC)
$(DSC): $(BUILDDIR)
	cd $(BUILDDIR); dpkg-buildpackage -S -us -uc -d
	lintian $(DSC)

sbuild: $(DSC)
	sbuild $(DSC)

deb:
	rm -f $(GEN_DEB) $(DOC_DEB)
	rm -rf $(BUILDDIR)
	$(MAKE) $(DOC_DEB)

$(GEN_DEB): $(DOC_DEB)

$(DOC_DEB): $(BUILDDIR)
	cd $(BUILDDIR); dpkg-buildpackage -b -us -uc
	lintian $(DOC_DEB) $(GEN_DEB)

.PHONY: clean-build
clean-build:
	rm -rf $(BUILDDIR)

.PHONY: install
install: gen-install doc-install

.PHONY: gen-install
gen-install: $(GEN_DEB_SOURCES) asciidoc-pmg
	install -dm755 $(DESTDIR)/usr/bin
	install -dm755 $(DESTDIR)/usr/share/$(GEN_PACKAGE)
	# install files
	install -m 0644 $(GEN_DEB_SOURCES) $(DESTDIR)/usr/share/$(GEN_PACKAGE)
	install -m 0755 $(GEN_SCRIPTS) $(DESTDIR)/usr/share/$(GEN_PACKAGE)
	# install asciidoc-pmg
	install -m 0755 asciidoc-pmg $(DESTDIR)/usr/bin/
	install -dm755 $(DESTDIR)/usr/share/$(GEN_PACKAGE)/asciidoc/
	install -m 0644 asciidoc/asciidoc-pmg.conf $(DESTDIR)/usr/share/$(GEN_PACKAGE)/asciidoc/
	install -m 0644 asciidoc/pmg-html.conf $(DESTDIR)/usr/share/$(GEN_PACKAGE)/asciidoc/

.PHONY: doc-install
doc-install: index.html $(API_VIEWER_SOURCES) verify-images
	# install files for pmgdocs package
	install -dm755 $(DESTDIR)/usr/share/$(DOC_PACKAGE)
	install -dm755 $(DESTDIR)/usr/share/doc/$(DOC_PACKAGE)
	install -m 0644 index.html $(INDEX_INCLUDES) $(DESTDIR)/usr/share/$(DOC_PACKAGE)
	# install screenshot images
	for d in screenshot installer; do \
	    install -dm755 $(DESTDIR)/usr/share/$(DOC_PACKAGE)/images/$$d; \
	    install -m 0644 images/$$d/*.png $(DESTDIR)/usr/share/$(DOC_PACKAGE)/images/$$d; \
	done
	# install api doc viewer
	install -dm755 $(DESTDIR)/usr/share/$(DOC_PACKAGE)/api-viewer
	install -m 0644 $(API_VIEWER_SOURCES) $(DESTDIR)/usr/share/$(DOC_PACKAGE)/api-viewer

.PHONY: upload
upload: UPLOAD_DIST ?= $(DEB_DISTRIBUTION)
upload: $(GEN_DEB) $(DOC_DEB)
	tar cf - $(GEN_DEB) $(DOC_DEB) | ssh -X repoman@repo.proxmox.com -- upload --product pmg --dist $(UPLOAD_DIST)

.PHONY: update
update: clean
	find . -regex '.*-\(opts\|synopsis\)\.adoc' -exec rm -f \{\} \;
	rm -f api-viewer/apidata.js
	make all

clean:
	find . -name '*~' -exec rm {} ';'
	rm -rf *.html *.pdf *.epub *.tmp *.1 *.5 *.8
	rm -f *.deb *dsc *.tar.* *.changes *.buildinfo *.build
	rm -f api-viewer/apidoc.js chapter-*.html *-plain.html chapter-*.html pmg-admin-guide.chunked asciidoc-pmg link-refs.json .asciidoc-pmg-tmp_* pmg-smtp-filter.8-synopsis.adoc pmgpolicy.8-synopsis.adoc pmgsh.1-synopsis.adoc
	rm -rf .pmg-doc-depends 
	rm -f pmg-doc-generator.mk chapter-index-table.adoc man1-index-table.adoc man5-index-table.adoc man8-index-table.adoc pmg-admin-guide-docinfo.xml pmg-copyright.adoc
	rm -rf $(DEB_SOURCE)-[0-9]*
