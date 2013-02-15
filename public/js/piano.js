$(document).ready(function() {
	$audio = $('audio');
  $button = $('.button');

	$button.on('click', function() {
		var key = $audio.get(0);
		key.pause();
		key.currentTime = 0;
		key.play();
  });
});