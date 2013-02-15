/**
 * Module Dependencies
 */
var _ = require('lodash');

var sendNote = function(socket) {
  return function(data) {
    socket.broadcast.emit('note', data);
  }
};

/**
 * Connection event handler for socket.io
 * @param  {socket} socket The socket io socket
 */
var connection = exports.connection = function(socket) {
  socket.emit('balance', {id: _.uniqueId(), groups: 11});
  socket.on('note', sendNote(socket));
};