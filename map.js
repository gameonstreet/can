let map;
let marker;

function initMap() {
  // Google Maps'i başlat
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
