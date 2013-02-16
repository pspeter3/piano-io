app = {

	// @method initialize
	// set current instant vars
	initialize: function(id, numGroups) {
		this.id = id;
		this.numGroups = numGroups;
	},

	// @method shouldPlay
	// Returns true if the note falls in your group of notes.
	shouldPlay: function(note) {
		return (note % this.numGroups) === (this.id % this.numGroups);
	},

	play: function(audio) {
  	audio.duration = 1;
  	audio.currentTime = 0;
		audio.play();	
	}

};

$(document).ready(function() {
	// initialize socket to listen to localhost
	var socket = io.connect('http://localhost');

	socket.on('balance', function(data){
		var id = data.id;
    var numGroups = data.groups;

    app.initialize(id, numGroups);
	});

	var $audio = $('audio');
	var $key = $('.piano-key');

  socket.on('note', function (data) {
    
    if (app.shouldPlay(data.id)) {
      app.play($audio.get(data.id));
    }
  });

  socket.on('helo', function(data) {
    console.log(data);
  });

  $key.on('click', function(){
  	app.play($audio.get(0));
  });
});
