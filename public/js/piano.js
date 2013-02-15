$(document).ready(function() {
	
	var socket = io.connect('http://localhost');
  	socket.on('helo', function (data) {
    console.log(data);
  });

	$audio = $('audio');
  $button = $('.piano-key');

	$button.on('click', function() {
		var key = $audio.get(0);
		key.pause();
		key.currentTime = 0;
		key.play();
  });
});