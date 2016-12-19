# Flickr API based location image browser

This site, tentatively called Hiker (with or without the E), will allow a user to browse a google map and view scenery from the relevant locations, in order to aid hike selection for optimal nature views...and the photography posts that come with it.

## How this will work

On the index page, there will be a button underneath the left-hand info column that serves as the initial start of the process. This will trigger an event that will load the map in through the right side of the page, and can also be accessed via one of the links at the top navigation, should the user see fit to use that instead. 

Upon load of the map, the user can move to a particular area (for this project, I was trying to focus more on the NY State hiking trails in the Hudson Valley) by clicking and zooming in on the map interface. Ideally, the trail names/routes would be viewable on the map itself. 

From there, there would be pins dropped on the particular trail name or landmarks along it which correspond to photos that have been geotagged on Flickr to those locations. These markers would be clickable, and would trigger a modal popup which would hold whichever photo has been taken there. This would give the user a general idea of what they would be seeing at the selected location.


## Technologies needed

1. [Bootstrap](http://getbootstrap.com/) / [Materialize](http://materializecss.com/) / [SemanticUI](http://semantic-ui.com/)
2. [Google Maps API](https://developers.google.com/maps/documentation/javascript/examples/map-simple)

## Screenshots
(upload an image of your layout to this repo then link to it here)


![image](http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg)
