// Socket IO variable
var socket = io.connect('http://192.168.1.59');

var notes = ['c', 'C', 'd', 'D', 'e', 'f', 'F', 'g', 'G', 'a', 'A', 'b'];

var getNoteId = function(note) {
  return notes.indexOf(note);
};

var sendNote = function(id) {
    socket.emit('note', {
      id: id
    });
  };

var clickNote = function() {
    var note = $(this).find('h2.note').attr('id');
    sendNote(getNoteId(note));
  };

var playBeat = function(note) {
  var id = getNoteId(note);
  return function() {
    sendNote(id);
  }
}
var playSong = function() {
  var notes = $('#notes').val().split('');
  for (var i = 0; i < notes.length; i++) {
    var time = i * 500;
    setTimeout(playBeat(notes[i]), time);
  };
};

$(function() {
  $('.thumbnail').click(clickNote);
  $('#song').submit(playSong);
});