$(document).ready(function() {
	
	

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