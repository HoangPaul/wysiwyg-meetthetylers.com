
new WOW().init();

var map;
var marker;

function initMap() {
  var ceLatLng = {lat: -36.384755, lng: 145.397873};
  var myLatLng = {lat: -36.284755, lng: 145.207873};
  var qwLatLng = {lat: -36.284755, lng: 145.452873};
  var qeLatLng = {lat: -36.484755, lng: 145.237873};

  map = new google.maps.Map(document.getElementById('map'), {
    center: ceLatLng,
    scrollwheel: false,
    zoom: 11
  });

  marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World$!',
    icon: '/images/markers/map-marker-fa-gift.png'
  });

  var marker1 = new google.maps.Marker({
    position: qwLatLng,
    map: map,
    title: 'Hello World!'
  });
  var marker2 = new google.maps.Marker({
    position: qeLatLng,
    map: map,
    title: 'Hello World2!'
  });

  directionsService = new google.maps.DirectionsService();
  directionsDisplayToWedding = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    suppressInfoWindows: true,
    preserveViewport: true
  });
  directionsDisplayToWedding.setMap(map);
  directionsDisplayToReception = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    suppressInfoWindows: true,
    preserveViewport: true
  });
  directionsDisplayToReception.setMap(map);

  var request = {
    origin: myLatLng,
    destination: qwLatLng,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplayToWedding.setDirections(response);
    }
  });
  var request = {
    origin: myLatLng,
    destination: qeLatLng,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplayToReception.setDirections(response);
    }
  });
}

(function($){

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var $w = $(window);
    $.fn.visible = function(partial,hidden,direction){
        if (this.length < 1)
            return;

        var $t        = this.length > 1 ? this.eq(0) : this,
            t         = $t.get(0),
            vpWidth   = $w.width(),
            vpHeight  = $w.height(),
            direction = (direction) ? direction : 'both',
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = rec.top    >= 0 && rec.top    <  vpHeight,
                bViz = rec.bottom >  0 && rec.bottom <= vpHeight,
                lViz = rec.left   >= 0 && rec.left   <  vpWidth,
                rViz = rec.right  >  0 && rec.right  <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop         = $w.scrollTop(),
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $w.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                offset          = $t.offset(),
                _top            = offset.top,
                _bottom         = _top + $t.height(),
                _left           = offset.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);

// Image scroll
/*
(function($){

  $(document).ready(function() {
    var scrollIntervalID = setInterval(function() {
      if ($("[data-scroll-target]").length == 0) {
        clearInterval(scrollIntervalID);
      }
      $("[data-scroll-target]").each(function(i, elem) {
        var $elem = $(elem);
        if ($elem.visible(true)) {
          var $target = $($elem.data("scroll-target"));
          $target.removeClass("slide-in");
          $elem.removeAttr('data-scroll-target');
        }
      });
    }, 500);
  });
})(jQuery);
*/
// Image greyout
(function($) {
  $("[data-img]").on("change", function() {
    var $this = $(this);
    var $target = $('#' + $this.data('img'));
    if ($this.data('img-type') == 'yes') {
      $target.removeClass('img-gray-filter');
    } else {
      $target.addClass('img-gray-filter');
    }
  });
})(jQuery);

// Countdown

(function($){
  setInterval(function() {
    var secondValue = $('#seconds span').html();
    if (secondValue == 0) {
      $('#seconds span').html(59)
      var minuteValue = $('#minutes span').html()
      $('#minutes span').html(minuteValue - 1)
    } else {
      $('#seconds span').html(secondValue - 1)
    }
  }, 1000);
})(jQuery);

// Map legend clickable

(function($) {
  $('[data-toggle="clickable-show-unique"]').on('click', function(event) {
    event.preventDefault();

    // De-activate all members in the group
    var group = $(this).data('group');
    $('[data-group="' + group + '"]').removeClass('active');
    $(this).addClass('active');

    // Activate the target member(s)
    var target = $(this).data('target');
    $(target).addClass('active');

    marker.setIcon('/images/markers/map-marker-fa-gift-large.png');
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
        marker.setAnimation(null);
    }, 700);
  });
})(jQuery);

// Map legend content

(function($) {
  $('[data-toggle="clickable-hide-all"]').on('click', function(event) {
    event.preventDefault();

    // De-activate all members in the group
    var group = $(this).data('group');
    $('[data-group="' + group + '"]').removeClass('active');
  });
})(jQuery);
