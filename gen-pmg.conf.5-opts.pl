#!/usr/bin/perl

use lib '.';

use strict;
use warnings;

use PVE::RESTHandler;

use PMG::Config;

my $types = PMG::Config::Base->lookup_types;

my $single_section = shift;
my $found = 0;

my $skiped_keys = {
    'delete' => 1,
    digest => 1,
};

my $key_groups = {
    'mail-options' => [
	'mail' , {
	    maxsize => 1,
	    rejectunknown => 1,
	    rejectunknownsender => 1,
	    helotests => 1,
	    dnsbl_sites => 1,
	    dnsbl_threshold => 1,
	    verifyreceivers => 1,
	    greylist => 1,
	    greylistmask4 => 1,
	    greylist6 => 1,
	    greylistmask6 => 1,
	    spf => 1,
	    hide_received => 1,
	    dwarning => 1,
	    conn_count_limit => 1,
	    conn_rate_limit => 1,
	    message_rate_limit => 1,
	    banner => 1,
	    before_queue_filtering => 1,
	    ndr_on_block => 1,
	    smtputf8 => 1,
	}],
    'mail-tls' => [
	'mail' , {
	    tls => 1,
	    tlsheader => 1,
	    tlslog => 1,
	}],
    'mail-ports' => [
	'mail' , {
	    int_port => 1,
	    ext_port => 1,
	}],
    'mail-relaying' => [
	'mail' , {
	    relay => 1,
	    relaynomx => 1,
	    relayport => 1,
	    relayprotocol => 1,
	    smarthost => 1,
	    smarthostport => 1,
	}],
    'admin-dkim' => [
	'admin' , {
	    dkim_selector => 1,
	    dkim_sign => 1,
	    dkim_sign_all_mail => 1,
	}],
};

if (1) {
    # verify if we document all mail settings
    my $plugin = PMG::Config::Base->lookup('mail');
    my $schema = $plugin->updateSchema(1);
    my $properties = $schema->{properties};

    my $found_mail_keys = {};
    foreach my $group (keys %$key_groups) {
	my ($sec, $hash) = @{$key_groups->{$group}};
	next if $sec ne 'mail';
	foreach my $k (keys %$hash) {
	    if (!defined($properties->{$k})) {
		warn "\n WARNING: unknown key '$k'";
		next;
	    }
	    $found_mail_keys->{$k} = 1;
	}
    }
    foreach my $k (keys %$properties) {
	next if $skiped_keys->{$k};
	next if $k =~ m/^max_(filters|policy|smtpd_in|smtpd_out)$/;

	if (!defined($found_mail_keys->{$k})) {
	    die "undocumented key '$k'" if !$ENV{PMG_DOCS_IGNORE_MISSING_KEY};
	    warn "WARNING: undocumented key '$k'\n";
	}
    }
}


my $select_keys;

if ($single_section) {
    if (my $a =  $key_groups->{$single_section}) {
	my ($sec, $hash) = @$a;
	$single_section = $sec;
	$select_keys = $hash;
    }
}


foreach my $section (@$types) {
    my $plugin = PMG::Config::Base->lookup($section);
    my $schema = $plugin->updateSchema(1);
    my $properties = $schema->{properties};

    if (defined($single_section)) {
	next if $section ne $single_section;
    } else {
	print ".Section '$section'\n\n";
    }

    $found = 1;

    my $filter = sub {
	my ($key, $phash) = @_;
	return 1 if $skiped_keys->{$key};
	return 1 if $select_keys && !$select_keys->{$key};
	return 0;
    };

    print PVE::RESTHandler::dump_properties(
	$properties, 'asciidoc', 'config', $filter);
}

if (defined($single_section)) {
    die "no such section '$single_section'" if !$found;
}

exit(0);
