(function() {

    var pg = require('pg');
    var conn_params = require('./db.js');

    module.exports.get = function (req, res) {
        pg.connect(conn_params, function (err, client, done) {
            if(err) {
                console.error('Could not connect to postgres', err);
            } else {
                var ret = client.query(
                    "SELECT * FROM pomotrack_pomodoro WHERE pomodoro_id=$1;",
                    [req.params.pomodoro_id],
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

    module.exports.put = function (req, res) {
        pg.connect(conn_params, function (err, client, done) {
            if(err) {
                console.error('Could not connect to postgres', err);
            } else {
                var ret = client.query(
                    "INSERT INTO pomotrack_pomodoro (user_id, " +
                    "description, time_started, time_ended) " +
                    "VALUES ($1, $2, $3, $4);",
                    [req.params.user_id, req.params.description,
                     req.params.time_started, req.params.time_ended],
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

    module.exports.post = function (req, res) {
        pg.connect(conn_params, function (err, client, done) {
            if(err) {
                console.error('Could not connect to postgres', err);
            } else {
                var ret = client.query(
                    "INSERT INTO pomotrack_pomodoro (user_id, " +
                    "description, time_started, time_ended) " +
                    "VALUES ($1, $2, $3, $4);",
                    [req.params.user_id, req.params.description,
                     req.params.time_started, req.params.time_ended],
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

    module.exports.del = function (req, res) {
        pg.connect(conn_params, function (err, client, done) {
            if(err) {
                console.error('Could not connect to postgres', err);
            } else {
                var ret = client.query(
                    "DELETE FROM pomotrack_pomodoro WHERE " +
                    "pomodoro_id=$1;", [req.params.pomodoro_id],
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

})();
