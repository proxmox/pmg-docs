#!/usr/bin/perl

use strict;
use warnings;
use JSON;

use PVE::RESTHandler;

use PMG::API2;

sub cleanup_tree {
    my ($h) = @_;

    my $class = ref($h);
    return $h if !$class;

    if ($class eq 'ARRAY') {
	my $res = [];
	foreach my $el (@$h) {
	    push @$res, cleanup_tree($el);
	}
	return $res;
    } elsif ($class eq 'HASH') {
	my $res = {};
	foreach my $k (keys %$h) {
	    if (my $class = ref($h->{$k})) {
		if ($class eq 'CODE') {
		    next if $k eq 'completion';
		}
		$res->{$k} = cleanup_tree($h->{$k});
	    } else {
		$res->{$k} = $h->{$k};
	    }
	}
	return $res;
    } elsif ($class eq 'Regexp') {
	return "$h"; # return string representation
    } else {
	die "unknown class '$class'\n";
    }
}

my $tree = cleanup_tree(PVE::RESTHandler::api_dump('PMG::API2'));

print "var apiSchema = " . to_json($tree, {pretty => 1, canonical => 1}) . ";\n\n";

exit(0);
