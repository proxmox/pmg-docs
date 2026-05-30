#!/usr/bin/perl

use lib '.';
use strict;
use warnings;
use PVE::RESTHandler;

use Data::Dumper;

use PMG::ClusterConfig;

my $schema = PMG::ClusterConfig::Base->createSchema(1);
my $properties = $schema->{properties};
    
    
print PVE::RESTHandler::dump_properties($properties);
 
exit(0);
