var restify = require('restify');

var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.requestLogger());

var pomodoro = require('./api/pomodoro.js');
server.get('/pomodoro/:name', pomodoro.get);

server.get('/', function(req, res, next) {
    res.send({'hello': 'world'});
    return next();
});

var port = process.env.PORT || 5000;
server.listen(port);
