var map

var coordenadas = {
    lat: 0,
    lng: 0
}
var propiedades = {
    center: coordenadas,
    zoom: 20
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), propiedades)
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
        position: coordenadas,
        map: map,
        icon: iconBase + 'parking_lot_maps.png'
    });
    if (navigator.geolocation) {
        setInterval(moverPosicion, 5000)
    }

    function moverPosicion() {
        navigator.geolocation.getCurrentPosition(pos => {
            var ps = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            }
            marker.setPosition(ps)
            map.panTo(ps)
            map.setCenter(ps)

        })
    }
}
