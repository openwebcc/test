/* Neuseelandreise v2.0 */

myStop = 4;
myZoom = 11;

let map = L.map('map');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.scale({
    imperial: false
}).addTo(map);

L.geoJSON({
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [172.67751, -34.426769]
            },
            "properties": {
                "nr": 1,
                "user": "danielwebmap",
                "name": "Cape Reinga",
                "wikipedia": "https://de.wikipedia.org/wiki/Cape_Reinga"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [174.8, -36.833333]
            },
            "properties": {
                "nr": 2,
                "user": "madeleinehll",
                "name": "Auckland",
                "wikipedia": "https://de.wikipedia.org/wiki/Auckland"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [176.070833, -38.684444]
            },
            "properties": {
                "nr": 3,
                "user": "laurauniibk",
                "name": "Taupo",
                "wikipedia": "https://de.wikipedia.org/wiki/Taup%C5%8D_(Stadt)"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [175.583333, -39.2]
            },
            "properties": {
                "nr": 4,
                "user": "webmapping",
                "name": "Tongariro National Park",
                "wikipedia": "https://de.wikipedia.org/wiki/Tongariro-Nationalpark"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [174.001944, -41.293056]
            },
            "properties": {
                "nr": 5,
                "user": "ernstanton",
                "name": "Picton",
                "wikipedia": "https://de.wikipedia.org/wiki/Picton_(Neuseeland)"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [172.8375, -41.819167]
            },
            "properties": {
                "nr": 6,
                "user": "annagruber263",
                "name": "Nelson",
                "wikipedia": "https://de.wikipedia.org/wiki/Nelson_(Neuseeland)"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [172.9, -40.833333]
            },
            "properties": {
                "nr": 7,
                "user": "kreiselinho",
                "name": "Abel Tasman Nationalpark",
                "wikipedia": "https://de.wikipedia.org/wiki/Abel-Tasman-Nationalpark"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [171.32694444444, -42.11861111111]
            },
            "properties": {
                "nr": 8,
                "user": "amjusi",
                "name": "Pancake rocks (Punakaiki)",
                "wikipedia": "https://www.wikiwand.com/de/Pancake_Rocks#introduction"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [170.19, -43.463]
            },
            "properties": {
                "nr": 9,
                "user": "marcfk",
                "name": "Franz Josef Glacier",
                "wikipedia": "https://de.wikipedia.org/wiki/Franz-Josef-Gletscher"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [170.15, -43.53]
            },
            "properties": {
                "nr": 10,
                "user": "sebspr",
                "name": "Fox Glacier",
                "wikipedia": "https://de.wikipedia.org/wiki/Fox-Gletscher"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [169.135278, -44.697222]
            },
            "properties": {
                "nr": 11,
                "user": "marcelboehm",
                "name": "Wanaka",
                "wikipedia": "https://de.wikipedia.org/wiki/Wanaka"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [167.866667, -44.616667]
            },
            "properties": {
                "nr": 12,
                "user": "sophiest01",
                "name": "Milford Sound",
                "wikipedia": "https://de.wikipedia.org/wiki/Milford_Sound/Piopiotahi"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [166.983333, -45.316667]
            },
            "properties": {
                "nr": 13,
                "user": "johanna135",
                "name": "Doubtfull Sound",
                "wikipedia": "https://en.wikipedia.org/wiki/Doubtful_Sound_/_Patea"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [170.5, -45.87]
            },
            "properties": {
                "nr": 14,
                "user": "czackl",
                "name": "Dunedin",
                "wikipedia": "https://de.wikipedia.org/wiki/Dunedin"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [170.826061, -45.345275]
            },
            "properties": {
                "nr": 15,
                "user": "meritkoch",
                "name": "Moeraki Boulders",
                "wikipedia": "https://de.wikipedia.org/wiki/Moeraki_Boulders"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [170.166667, -44.046667]
            },
            "properties": {
                "nr": 16,
                "user": "niklasschw",
                "name": "Lake Pukaki",
                "wikipedia": "https://de.wikipedia.org/wiki/Lake_Pukaki"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [170.142103, -43.595136]
            },
            "properties": {
                "nr": 17,
                "user": "bendai98",
                "name": "Mount Cook",
                "wikipedia": "https://de.wikipedia.org/wiki/Aoraki/Mount_Cook"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [170.516667, -43.883333]
            },
            "properties": {
                "nr": 18,
                "user": "yle5",
                "name": "Lake Tekapo",
                "wikipedia": "https://en.wikipedia.org/wiki/Lake_Tekapo"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [172.636667, -43.531111]
            },
            "properties": {
                "nr": 19,
                "user": "laurent2997",
                "name": "Christchurch",
                "wikipedia": "https://de.wikipedia.org/wiki/Christchurch"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [173.682222, -42.411667]
            },
            "properties": {
                "nr": 20,
                "user": "lealucia",
                "name": "Kaikoura",
                "wikipedia": "https://de.wikipedia.org/wiki/Kaikoura_(Neuseeland)"
            }
        }
    ]
}, {
    pointToLayer: function (feature, coords) {
        let mrk = L.marker(coords);
        mrk.bindPopup(`
            <h2>${feature.properties.name}</h2>
            <ul>
                <li>Breite: ${coords.lat.toFixed(5)}°</li>
                <li>Länge: ${coords.lng.toFixed(5)}°</li>
                <li><a href="${feature.properties.wikipedia}">Link zum Wikipedia-Eintrag</a></li>
            </ul>
        `);

        if (feature.properties.nr == myStop) {
            map.setView(coords, myZoom);
            L.popup(coords, {
                content: mrk.getPopup().getContent()
            }).openOn(map);
        }
        return mrk;
    }
}).addTo(map);
