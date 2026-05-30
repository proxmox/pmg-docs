#!/usr/bin/perl

use lib '.';
use strict;
use warnings;
use PVE::RESTHandler;

use Data::Dumper;

use PMG::UserConfig;

my $schema = $PMG::UserConfig::create_schema;
my $properties = $schema->{properties};
    
print PVE::RESTHandler::dump_properties($properties);
 
exit(0);
