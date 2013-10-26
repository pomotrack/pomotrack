#!/bincddcd/bash
# Setup script for pgsql database
cat setup.sql | psql template1
cat 0.1.0.sql | psql pomotrack -U pomotrack -W
