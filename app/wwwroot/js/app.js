let source = new ol.source.Vector();
var clusterSource = new ol.source.Cluster({
    source: source
});

var styleCache = {};
let layer = new ol.layer.Vector({
  source: clusterSource,
  style: function(feature) {
    var size = feature.get('features').length;
    var style = styleCache[size];
    if (!style) {
      style = new ol.style.Style({
        image: new ol.style.Circle({
          radius: 10,
          stroke: new ol.style.Stroke({
            color: '#fff'
          }),
          fill: new ol.style.Fill({
            color: '#3399CC'
          })
        }),
        text: new ol.style.Text({
          text: size.toString(),
          fill: new ol.style.Fill({
            color: '#fff'
          })
        })
      });
      styleCache[size] = style;
    }
    return style;
  }
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
        let features = []
        for (let i = 0; i < 10; i++) {
            features.push(getRandomFeature())
        }
        source.addFeatures(features)
    }
    bu100.onclick = function () {
        let features = []
        for (let i = 0; i < 100; i++) {
            features.push(getRandomFeature())
        }
        source.addFeatures(features)
    }
    bu1000.onclick = function () {
        let features = []
        for (let i = 0; i < 1000; i++) {
            features.push(getRandomFeature())
        }
        source.addFeatures(features)
    }
    bu10000.onclick = function () {
        let features = []
        for (let i = 0; i < 10000; i++) {
            features.push(getRandomFeature())
        }
        source.addFeatures(features)
    }
});