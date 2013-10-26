(function() {

    var pg = require('pg');
    var conn_params = process.env.DATABASE_URL || {
        'user': 'pomotrack',
        'database': 'pomotrack',
        'password': 'pomotrack',
        'host': 'localhost'
    };

    module.exports.get = function(req, res, next) {
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
        return next();
    };

    module.exports.post = function(req, res, next) {

    };

    module.exports.put = function(req, res, next) {
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
                            res.send(result.rows[0]);
                        }
                    });
            }
            done();
        });
        return next();
    };

    module.exports.del = function(req, res, next) {
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
                            res.send(result.rows[0]);
                        }
                    });
            }
            done();
        });
        return next();
    };

})();
