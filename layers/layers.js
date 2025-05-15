ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([106.900410, -7.184115, 108.277811, -6.611406]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_modul5praktikum_1 = new ol.format.GeoJSON();
var features_modul5praktikum_1 = format_modul5praktikum_1.readFeatures(json_modul5praktikum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_modul5praktikum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_modul5praktikum_1.addFeatures(features_modul5praktikum_1);
var lyr_modul5praktikum_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_modul5praktikum_1, 
                style: style_modul5praktikum_1,
                popuplayertitle: 'modul 5 praktikum',
                interactive: true,
    title: 'modul 5 praktikum<br />\
    <img src="styles/legend/modul5praktikum_1_0.png" /> CURUG<br />\
    <img src="styles/legend/modul5praktikum_1_1.png" /> GUNUNG<br />\
    <img src="styles/legend/modul5praktikum_1_2.png" /> TAMAN<br />\
    <img src="styles/legend/modul5praktikum_1_3.png" /> <br />\
    <img src="styles/legend/modul5praktikum_1_4.png" /> SEKOLAH<br />\
    <img src="styles/legend/modul5praktikum_1_5.png" /> RUMAH SAKIT<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_modul5praktikum_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_modul5praktikum_1];
lyr_modul5praktikum_1.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'X- COORD': 'X- COORD', 'Y-COORD': 'Y-COORD', 'deskripsi': 'deskripsi', 'GAMBAR URL': 'GAMBAR URL', });
lyr_modul5praktikum_1.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', 'X- COORD': 'TextEdit', 'Y-COORD': 'TextEdit', 'deskripsi': 'TextEdit', 'GAMBAR URL': 'TextEdit', });
lyr_modul5praktikum_1.set('fieldLabels', {'id': 'header label - always visible', 'NAMA': 'header label - always visible', 'X- COORD': 'inline label - visible with data', 'Y-COORD': 'inline label - visible with data', 'deskripsi': 'hidden field', 'GAMBAR URL': 'no label', });
lyr_modul5praktikum_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});