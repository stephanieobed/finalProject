$('.ui.accordion')
  .accordion()
;

// Google Maps API + OSM layer

var map;
      function initMap(gId = '1674303@N22') {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.4498, lng: -73.9661},
          zoom: 13,
          mapTypeId: "OSM",
          mapTypeControl: false,
          streetViewControl: false
        });

        var georssLayer = new google.maps.KmlLayer({
          url: 'http://api.flickr.com/services/feeds/geo/?g='+ gId +'&lang=en-us&format=feed-georss'
        });
        georssLayer.setMap(map);

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



const btnMap = $('.js-btn-map');

btnMap.click(onMapBtnClick);

function onMapBtnClick(e) {
  const currentElement = $(this);
  const gId = currentElement.attr('data-id');

  initMap(gId)
  // console.log()

}

// Flickr API 

$.ajax({
  url: 'https://api.flickr.com/services/rest/', 
  data: {
    method: 'flickr.photos.search',
    api_key: '75f73b938c8b88fce741814c87fd6465',
    text: 'forest',
    safe_search: '1',
    content_type: '1',
    sort: 'relevance',
    per_page: '20',
    format: 'json',
  },
  method: 'GET',
  dataType: 'jsonp',
});

function jsonFlickrApi(data) {
  console.log(data)
}

function constructImageURL(photo) {
  return "http://farm" + photo.farm +
      ".static.flickr.com/" + photo.server +
      "/" + photo.id +
      "_" + photo.secret +
      "_m.jpg";
}



// Trigger/on-click event

const search = $('.js-nav');

search.click(onClick);

function onClick(e) {
  const currentElement = $(this);
  const selector = currentElement.attr('data-target');
  $('.js-page-section').transition('hide');
  // setTimeout(function() {
  const itemToShow = $('.'+selector).transition('fade up');
  if (selector === 'js-map') {
    initMap()
  }

  console.log(selector)
  // console.log()

}
