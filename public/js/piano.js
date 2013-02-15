$(document).ready(function() {
	// initialize socket to listen to localhost
	var socket = io.connect('http://localhost');
	
	// hello test message
	socket.on('helo', function (data) {
		console.log(data);
	});

	// setup callback
	// data of format
	// {
	//  	groupId: 1,
	//		numGroups: 5
	// }
	socket.on('setup', function(data){
		clientState.groupId = data.groupId || clientState.groupId;
		clientState.numGroups = data.numGroups || clientState.numGroups;
	});

	var $audio = $('audio#tone-3C');
	var $key = $('.piano-key');

	$key.on('click', function() {
		console.log('clicked');

		var tone = $audio.get(0);
		tone.pause();
		tone.currentTime = 0;
		tone.play();
  });

  var socket = io.connect('http://localhost');
  socket.on('note', function (data) {
    console.log(data.id);
    var tone = $audio.get(data.id);
    tone.play();
  });
});
