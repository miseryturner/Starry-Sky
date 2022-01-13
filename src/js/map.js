var app = new Vue({
    el: '#mapView',
    data: {
        map: {
            city: 'Moscow',
            location: '55.755°N / 37.617°E',
            country: 'Russia'
        }
    }
})

var map = L.map('map').setView([51.505, -0.09], 13);

var tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

map.on('click', onMapClick);
