// Google Maps API

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.4497, lng: -73.9588},
          zoom: 12,
          mapTypeId: "OSM",
          mapTypeControl: false,
          streetViewControl: false
        });

//Define OSM map type pointing at the OpenStreetMap tile server
            map.mapTypes.set("OSM", new google.maps.ImageMapType({
                getTileUrl: function(coord, zoom) {
                    // "Wrap" x (logitude) at 180th meridian properly
                    // NB: Don't touch coord.x because coord param is by reference, and changing its x property breakes something in Google's lib 
                    var tilesPerGlobe = 1 << zoom;
                    var x = coord.x % tilesPerGlobe;
                    if (x < 0) {
                        x = tilesPerGlobe+x;
                    }
                    // Wrap y (latitude) in a like manner if you want to enable vertical infinite scroll

                    return "http://tile.openstreetmap.org/" + zoom + "/" + x + "/" + coord.y + ".png";
                },
                tileSize: new google.maps.Size(256, 256),
                name: "OpenStreetMap",
                maxZoom: 18
            }));
      }

// // Flickr API 

// var req = new XMLHttpRequest();
// req.open(
//     "GET",
//     "https://api.flickr.com/services/rest/?" +
//         "method=flickr.photos.search&" +
//         "api_key=75f73b938c8b88fce741814c87fd6465&" +
//         "text=forest&hudson-valley&hiking" +
//         "safe_search=1&" +  // 1 is "safe"
//         "content_type=1&" +  // 1 is "photos only"
//         "sort=relevance&" +  // another good one is "interestingness-desc"
//         "per_page=20&format=json",
//     true);
// req.onload = showPhotos;
// req.send(null);

// function showPhotos(data) {
//     console.log(this.responseText)
// //   var photos = req.responseXML.getElementsByTagName("photo");
// //   console.log(data)
// //   for (var i = 0, photo; photo = photos[i]; i++) {
// //       console.log(photo)
// //   }
// }

// function constructImageURL(photo) {
//   return "http://farm" + photo.farm +
//       ".static.flickr.com/" + photo.server +
//       "/" + photo.id +
//       "_" + photo.secret +
//       "_m.jpg";
// }

