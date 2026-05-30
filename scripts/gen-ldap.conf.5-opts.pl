#!/usr/bin/perl

use lib '.';
use strict;
use warnings;
use PVE::RESTHandler;

use Data::Dumper;

use PMG::LDAPConfig;

my $schema = PMG::LDAPConfig->createSchema(1);
my $properties = $schema->{properties};
    
print PVE::RESTHandler::dump_properties($properties);
 
exit(0);
