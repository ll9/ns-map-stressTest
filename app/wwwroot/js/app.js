let source = new ol.source.Vector();
let layer = new ol.layer.Vector({
    source: source
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        layer
    ],
    view: new ol.View({
        center: ol.proj.transform([12.3, 48], 'EPSG:4326', 'EPSG:3857'),
        zoom: 10
    })
});

let feature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.transform([12.3, 48], 'EPSG:4326', 'EPSG:3857'))
})

source.addFeature(feature);

function getRandomFeature() {
    let feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([12.3 + 0.2 * Math.random(), 48 + 0.2 * Math.random()], 'EPSG:4326', 'EPSG:3857'))
    })
    return feature;
}

document.addEventListener("DOMContentLoaded", () => {
    let bu10 = document.getElementById("10-features");
    let bu100 = document.getElementById("100-features");
    let bu1000 = document.getElementById("1000-features");
    let bu10000 = document.getElementById("10000-features");

    bu10.onclick = function () {
        for (let i = 0; i < 10; i++) {
            source.addFeature(getRandomFeature());
        }
    }
    bu100.onclick = function () {
        for (let i = 0; i < 100; i++) {
            source.addFeature(getRandomFeature());
        }
    }
    bu1000.onclick = function () {
        for (let i = 0; i < 1000; i++) {
            source.addFeature(getRandomFeature());
        }
    }
    bu10000.onclick = function () {
        for (let i = 0; i < 10000; i++) {
            source.addFeature(getRandomFeature());
        }
    }
});