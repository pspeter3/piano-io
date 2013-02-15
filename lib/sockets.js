/**
 * Module Dependencies
 */
var _ = require('lodash');

var sendNote = function(socket) {
  return function(data) {
    socket.broadcast.emit('note', data);
  }
};

var count = 0;

/**
 * Connection event handler for socket.io
 * @param  {socket} socket The socket io socket
 */
var connection = exports.connection = function(socket) {
  socket.emit('balance', {id: count++, groups: 11});
  socket.on('note', sendNote(socket));
};