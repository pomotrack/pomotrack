var restify = require('restify');

var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.requestLogger());

var pomodoro = require('./api/pomodoro.js');
server.get('/api/pomodoro/:name', pomodoro.get);

var user = require('./api/user.js');
server.get('/api/user/:user_id', user.get);
server.del('/api/user/:user_id', user.del);
server.put('/api/user', user.put);

server.get('/', function(req, res, next) {
    res.send({'hello': 'world'});
    return next();
});

var port = process.env.PORT || 5000;
server.listen(port);
