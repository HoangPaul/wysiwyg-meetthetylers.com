
<script async defer src="js/bootstrap.js"></script>
<script async defer src="js/scripts.js"></script>

<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAodTyDDDaQlVLMWDmHksa9030r2tyzgDk&callback=initMap">
</script>
<script>
var map;
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

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
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
</script>
