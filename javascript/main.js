// accordion
$(document).ready(function(){
	$('.collapsible').collapsible();
});


// Flickr API 

var req = new XMLHttpRequest();
req.open(
    "GET",
    "https://api.flickr.com/services/rest/?" +
        "method=flickr.photos.search&" +
        "api_key=75f73b938c8b88fce741814c87fd6465&" +
        "text=forest&hudson-valley&hiking" +
        "safe_search=1&" +  // 1 is "safe"
        "content_type=1&" +  // 1 is "photos only"
        "sort=relevance&" +  // another good one is "interestingness-desc"
        "per_page=20&format=json",
    true);
req.onload = showPhotos;
req.send(null);

function showPhotos(data) {
    console.log(this.responseText)
//   var photos = req.responseXML.getElementsByTagName("photo");
//   console.log(data)
//   for (var i = 0, photo; photo = photos[i]; i++) {
//       console.log(photo)
//   }
}

function constructImageURL(photo) {
  return "http://farm" + photo.farm +
      ".static.flickr.com/" + photo.server +
      "/" + photo.id +
      "_" + photo.secret +
      "_m.jpg";
}


// Google Maps API