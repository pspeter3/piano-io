/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./lib/routes');
var sockets = require('./lib/sockets');
var http = require('http');
var path = require('path');
var socketio = require('socket.io');

/**
 * Express set up
 */
var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/piano', routes.piano);

var server = http.createServer(app);

/**
 * Socket.io set up
 */
var io = socketio.listen(server);

io.sockets.on('connection', sockets.connection);

/**
 * Listen
 */
server.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});