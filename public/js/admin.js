$(function() {
  // Socket IO variable
  var socket = io.connect('http://ppeter-mn');
  // H1 Node
  var $header = $('h1.note');

  var displayNote = function(id) {
    $header.html(id);
  };
  
  var keyHandler = function(event) {
    var id = event.which % 88;
    socket.emit('note', {id: id});
    displayNote(id);
  };

  $(document).bind('keypress', keyHandler);
});