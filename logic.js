// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  //grab data
  var myData = data.features;
  for (var i = 0; i < features.len; i++) {
    var obj = features[i]
    for (var key in obj) {
      console.log(key+"="+obj[key]);
    }
  }
});