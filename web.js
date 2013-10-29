var express = require('express');

var app = express();
app.configure(function () {
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var pomodoro = require('./api/pomodoro.js');
app.get('/api/pomodoros/:name', pomodoro.get);

var user = require('./api/user.js');
app.get('/api/users/:user_id', user.get);
app.del('/api/users/:user_id', user.del);
app.put('/api/users/:user_id', user.put);
app.post('/api/users', user.post);

app.get('/', function(req, res, next) {
    res.send({'hello': 'world'});
    return next();
});

var port = process.env.PORT || 5000;
app.listen(port);
