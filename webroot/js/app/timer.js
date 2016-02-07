define(["jquery"], function($) {
	$('body').on('templates:appended', function() {
		    setInterval(function() {
	        var secondValue = $('#SECS span').html();
	        if (secondValue == 0) {
	            $('#SECS span').html(59)
	            var minuteValue = $('#MINS span').html()
	            $('#MINS span').html(minuteValue - 1)
	        } else {
	            $('#SECS span').html(secondValue - 1)
	        }
	    }, 1000);
	});
});
