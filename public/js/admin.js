// Socket IO variable
var socket = io.connect('http://ppeter-mn');
var sendNote = function(id) {
  socket.emit('note', {id: id});
};

var click = function() {
  var id = $(this).find('h2.note').attr('id');
  sendNote(id);
};

$(function() {
  $('.thumbnail').click(click);
});