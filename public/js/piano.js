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
	}

};

$(document).ready(function() {
	// initialize socket to listen to localhost
	var socket = io.connect('http://ppeter-mn');

	socket.on('balance', function(data){
		var id = data.id;
    var numGroups = data.groups;

    app.initialize(id, numGroups);
	});

	var $audio = $('audio');
	var $key = $('.piano-key');
  var tone;

  socket.on('note', function (data) {
    
    if (app.shouldPlay(data.id)) {
    	tone = $audio.get(data.id);
    	tone.play();
    }
  });

  socket.on('helo', function(data) {
    console.log(data);
  });
});
