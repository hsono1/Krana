$(document).ready( function(){   


		$('#img').on({
		'click': function() {
		
			if ($(this).attr('src') === '../../static/krana_app/img/stop.png')
			{
				$(this).attr('src', '../../static/krana_app/img/speaker.gif');
				audio.play();
			}
			else 
			{
				$(this).attr('src', '../../static/krana_app/img/stop.png');
				audio.pause();
			}

		}
		});




		  var supportsAudio = !!document.createElement('audio').canPlayType;
		  if(supportsAudio) {
		    var index = 0,
		    playing = false;

		    
		    mediaPath = 'krana_app/mp3/',
		    extension = '',
		    tracks = [
		      {"track":1,"name":"numb","length":"00:55","file":"numb.mp3"},
		      {"track":2,"name":"crawling","length":"00:37","file":"crawling.mp3"},
		      {"track":3,"name":"Wedding March Variation 2","length":"00:40","file":"intheend.mp3"}
		    ],
		    trackCount = tracks.length,
		    npAction = $('#img'),
		    npTitle = $('#npTitle'),
		    audio = $('#audio1').bind('play', function() {
		      playing = true;
		      npAction.text('Now Playing:');
		    }).bind('pause', function() {
		      playing = false;
		      npAction.text('Paused:');
		    }).bind('ended', function() {
		      npAction.text('Paused:');
		      if((index + 1) < trackCount) {
		        index++;
		        loadTrack(index);
		        audio.play();
		      } else {
		        audio.pause();
		        index = 0;
		        loadTrack(index);
		      }
		    }).get(0),
		    btnPrev = $('#btnPrev').click(function() {
		      if((index - 1) > -1) {
		        index--;
		        loadTrack(index);
		        if(playing) {
		          audio.play();
		        }
		      } else {
		        audio.pause();
		        index = 0;
		        loadTrack(index);
		      }
		    }),
		    btnNext = $('#btnNext').click(function() {
		      if((index + 1) < trackCount) {
		        index++;
		        loadTrack(index);
		        if(playing) {
		          audio.play();
		        }
		      } else {
		        audio.pause();
		        index = 0;
		        loadTrack(index);
		      }
		    }),
		    li = $('#plUL li').click(function() {
		      var id = parseInt($(this).index());
		      if(id !== index) {
		        playTrack(id);
		      }
		    }),
		    loadTrack = function(id) {
		      $('.plSel').removeClass('plSel');
		      $('#plUL li:eq(' + id + ')').addClass('plSel');
		      npTitle.text(tracks[id].name);
		      index = id;
		      audio.src = '../../static/krana_app/mp3/' + tracks[id].file;
		    },
		    playTrack = function(id) {
		      loadTrack(id);
		      audio.play();
		    };

		    extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';

		    loadTrack(index);
		  }





	  $('#useLegend').click(function(e) {
	    e.preventDefault();
	    $('#use').slideToggle(300, function() {
	      $('#useSpanSpan').text(($('#use').css('display') == 'none' ? 'show' : 'hide'));
	    });
	  });
});





