
<script async defer src="js/scripts.js"></script>

<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAodTyDDDaQlVLMWDmHksa9030r2tyzgDk&callback=initMap">
</script>
<script>
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
</script>
