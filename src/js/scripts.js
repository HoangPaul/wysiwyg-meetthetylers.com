
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
