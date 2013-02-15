/**
 * Connection event handler for socket.io
 * @param  {socket} socket The socket io socket
 */
var connection = exports.connection = function(socket) {
  for (var i = 0; i < 88; i++) {
    socket.emit('note', {id: i});
  }
};