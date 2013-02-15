app = {

	// @method shouldPlay
	// Returns true if the note falls in your group of notes.
	shouldPlay: function(note, myGroup, numGroups) {
		return true;
	}

};

$(document).ready(function() {
	// initialize socket to listen to localhost
	var socket = io.connect('http://localhost');
  var id, group;

	socket.on('balance', function(data){
		id = data.id;
    group = data.group;
	});

	var $audio = $('audio');
	var $key = $('.piano-key');

  socket.on('note', function (data) {
    
    if (app.shouldPlay(data.id, id, group)) {
    	var tone = $audio.get(data.id);
    	tone.play();
    }
  });

  socket.on('helo', function(data) {
    console.log(data);
  });
});
