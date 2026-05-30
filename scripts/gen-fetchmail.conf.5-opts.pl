#!/usr/bin/perl

use lib '.';
use strict;
use warnings;
use PVE::RESTHandler;

use Data::Dumper;

use PMG::API2::Fetchmail;

my $properties = $PMG::API2::Fetchmail::fetchmail_create_properties;

print PVE::RESTHandler::dump_properties($properties);
 
exit(0);
