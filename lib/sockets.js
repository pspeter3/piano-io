/**
 * Module Dependencies
 */
var _ = require('lodash');

/**
 * Connection event handler for socket.io
 * @param  {socket} socket The socket io socket
 */
var connection = exports.connection = function(socket) {
  socket.emit('balance', {id: _.uniqueId(), groups: 11});
};