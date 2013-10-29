(function() {

    var pg = require('pg');
    var conn_params = require('./db.js');

    module.exports.get = function(req, res) {
        pg.connect(conn_params, function (err, client, done) {
            if(err) {
                console.error('could not connect to postgres', err);
            } else {
                var ret = client.query(
                    "SELECT * FROM pomotrack_user WHERE user_id=$1;",
                    [req.params.user_id],
                    function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send(result.rows[0]);
                        }
                    });
            }
            done();
        });
    };

    module.exports.post = function(req, res, next) {
        pg.connect(conn_params, function (err, client, done) {
            if(err) {
                console.error('could not connect to postgres', err);
            } else {
                var ret = client.query(
                    "INSERT INTO pomotrack_user (email, first_name, " +
                    "last_name, token) VALUES ($1, $2, $3, $4);",
                    [req.params.email, req.params.first_name,
                     req.params.last_name, req.params.token],
                    function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.status(201).send(result.rows[0]);
                        }
                    });
            }
            done();
        });
    };

    module.exports.put = function(req, res) {
        pg.connect(conn_params, function (err, client, done) {
            if(err) {
                console.error('could not connect to postgres', err);
            } else {
                var ret = client.query(
                    "UPDATE pomotrack_user SET email=$1, first_name=$2, " +
                    "last_name=$3, token=$4 WHERE user_id=$5",
                    [req.body.email, req.body.first_name,
                     req.body.last_name, req.body.token,
                     req.params.user_id],
                    function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send(result.rows[0]);
                        }
                    });
            }
            done();
        });
    };

    module.exports.del = function(req, res) {
        pg.connect(conn_params, function (err, client, done) {
            if(err) {
                console.error('could not connect to postgres', err);
            } else {
                var ret = client.query(
                    "DELETE FROM pomotrack_user WHERE user_id=$1;",
                    [req.params.user_id],
                    function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.status(204).send(result.rows[0]);
                        }
                    });
            }
            done();
        });
    };

})();
