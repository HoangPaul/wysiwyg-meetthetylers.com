define(['jquery'], function($) {
	var intervalId = null;

	return {
		load : function() {
			var $elem = $('[data-timer]');
			if ($elem.length === 0) {
				return;
			}

			var targetTime = $elem.data('time');
			var remainingTime = targetTime - Date.now() / 1000;
	
			var remainingDay = remainingTime / 60 / 60 / 24;
			var remainingHoursInSeconds = remainingTime - (Math.floor(remainingDay) * 60 * 60 * 24);
			var remainingHr = remainingHoursInSeconds / 60 / 60;
			var remainingMinutesInSeconds = remainingHoursInSeconds - (Math.floor(remainingHr) * 60 * 60);
			var remainingMin = remainingMinutesInSeconds / 60;
			var remainingSec = remainingMinutesInSeconds - (Math.floor(remainingMin) * 60);
	
			var $dayElem  = $('[data-time-unit="DAYS"] span');
			var $hourElem = $('[data-time-unit="HRS"] span');
			var $minElem  = $('[data-time-unit="MINS"] span');
			var $secElem  = $('[data-time-unit="SECS"] span');
	
			$dayElem.html(Math.floor(remainingDay));
			$hourElem.html(Math.floor(remainingHr));
			$minElem.html(Math.floor(remainingMin));
			$secElem.html(Math.floor(remainingSec));

			clearInterval(intervalId);
	
		    intervalId = setInterval(function() {
		        var secondValue = $secElem.html();
		        if (secondValue == 0) {
		            $secElem.html(59)
		            var minuteValue = $minElem.html()
		            $minElem.html(minuteValue - 1)
		        } else {
	    	        $secElem.html(secondValue - 1)
		        }
		    }, 1000);
		}
	};
});
