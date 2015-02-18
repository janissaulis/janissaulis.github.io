var Pointer = new google.maps.LatLng(56.909420, 24.094588);
var Location = new google.maps.LatLng(56.909420, 24.094588);
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: Pointer,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        draggable: false,
        panControl: true

    };

    map = new google.maps.Map(document.getElementById('google_map'),
        mapOptions);

    marker = new google.maps.Marker({
        map:map,
        draggable:false,
        animation: google.maps.Animation.DROP,
        position: Location
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
