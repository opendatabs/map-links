function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        lat: params.get('lat'),
        lon: params.get('lon'),
        tree_groups: params.get('p1'),
        tree_group_layers_: params.get('p2')
    };
}

function updateLinks(lat, lon) {
    document.getElementById('location-info').innerText = `Latitude: ${lat}, Longitude: ${lon}`;

    const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
    const appleMapsLink = `https://maps.apple.com/?daddr=${lat},${lon}`;
    const wazeLink = `https://www.waze.com/ul?ll=${lat},${lon}&navigate=yes`;
    const bingMapsLink = `https://www.bing.com/maps?q=${lat},${lon}`;
    const osmLink = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=18/${lat}/${lon}`;
    const geoUriLink = `geo:${lat},${lon}`;

    const mapBSLink = `https://map.geo.bs.ch/`;

    document.getElementById('google-maps-link').href = googleMapsLink;
    document.getElementById('apple-maps-link').href = appleMapsLink;
    document.getElementById('waze-link').href = wazeLink;
    document.getElementById('bing-maps-link').href = bingMapsLink;
    document.getElementById('osm-link').href = osmLink;
    document.getElementById('geo-uri-link').href = geoUriLink;
    document.getElementById('mapbs-link').href = mapBSLink;
}

document.addEventListener('DOMContentLoaded', () => {
    const params = getQueryParams();
    if (params.lat && params.lon) {
        updateLinks(params.lat, params.lon);
    } else {
        document.getElementById('location-info').innerText = 'No coordinates provided.';
    }
});
