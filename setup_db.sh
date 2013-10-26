#!/bin/bash
# Setup script for pgsql database

createuser pomotrack
createdb pomotrack
cat 0.1.0.sql | psql pomotrack
