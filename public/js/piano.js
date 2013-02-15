$(document).ready(function() {
	// initialize socket to listen to localhost
	var socket = io.connect('http://ppeter-mn');
  var id, group;

	socket.on('balance', function(data){
		id = data.id;
    group = data.groups;
	});

	var $audio = $('audio');
	var $key = $('.piano-key');

  socket.on('note', function (data) {
    console.log(data);
    var tone = $audio.get(data.id);
    tone.play();
  });

  socket.on('helo', function(data) {
    console.log(data);
  });
});
