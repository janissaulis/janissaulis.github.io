var SaulisHatta = new google.maps.LatLng(56.909420, 24.094588);
var Ziepniekkalns = new google.maps.LatLng(56.909420, 24.094588);
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: SaulisHatta,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.getElementById('google_map'),
        mapOptions);

    marker = new google.maps.Marker({
        map:map,
        draggable:true,
        animation: google.maps.Animation.DROP,
        position: Ziepniekkalns
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
