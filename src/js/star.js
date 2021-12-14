var app = new Vue({
    el: '#starSky',
    data: {
        starSky: {
            message: 'Под этим звёздным небом началась наша история',
            city: 'Москва',
            country: 'Россия', 
            date: '20 июля 2020 года',
            time: '22:00',
            location: '55.755°N / 37.617°E'
        }
    }
});

var cfg = Celestial.settings().set({
    zoomlevel: 1.3,    // Начальный зум
    zoomextend: 1.3,     // Максимальный зум
    interactive: true,  // Возможность приближать и вращать карту
    geopos: [0,0],
    location: true,  
    controls: false,
    land: 'ru',
    advanced: false,
    follow: "center",
    projection: "orthographic",
    datapath: "https://ofrohn.github.io/data/",
    mw: {
        show: false
    },
    background: {        // Background style
        //fill: "#000000",   // Area fill
        opacity: 0, 
        //stroke: "#000000", // Outline
        //width: 1.5
    }, 
    lines: {
        graticule: { 
            show: true, stroke: "#cccccc", width: 0.6, opacity: 0.8,
            lon: {pos: [""], fill: "#eee", font: "10px Helvetica, Arial, sans-serif"}, 
            lat: {pos: [""], fill: "#eee", font: "10px Helvetica, Arial, sans-serif"}
        },    
        equatorial: { show: false, stroke: "#aaaaaa", width: 1.3, opacity: 0.7 },  
        ecliptic: { show: false, stroke: "#66cc66", width: 1.3, opacity: 0.7 },     
        galactic: { show: false, stroke: "#cc6666", width: 1.3, opacity: 0.7 },    
        supergalactic: { show: false, stroke: "#cc66cc", width: 1.3, opacity: 0.7 }
    },
    planets: { 
        show: false 
    },
    stars: { //звёзды
        names: false,
        limit: 4.6 ,
        designation: false,
        colors : false, 
        style: { fill: "#FCFDFF", opacity: 1 },
    },
    dsos: {
        show: false
    },
    constellations: { // Показывать названия созвездий
        names: false, 
        namesType: 'ru',
        nameStyle: {opacity: "0"},  
        lines: true,
        //namesType: "ru", // Язык для названий созвездий
    }   
}),

reqID,
reqAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame  ||
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
                window.oRequestAnimationFrame,
cncAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
                window.webkitCancelAnimationFrame || window.msCancelAnimationFrame ||
                window.oCancelAnimationFrame,
dt = new Date();

Celestial.display(cfg);


//vue js

//Чекбоксы styles
function chengeVarables() {

    //Чекбокс - заливка фона

    if(document.getElementById('checkbox1').checked) {
        cfg.background.opacity = 1;
        Celestial.display(cfg);
    } else {
        cfg.background.opacity = 0;
        Celestial.display(cfg);
    }

    //Чекбокс - сетка

    if(document.getElementById('checkbox2').checked) {
        cfg.lines.graticule.show = true;
        Celestial.display(cfg);
    } else {
        cfg.lines.graticule.show = false;
        Celestial.display(cfg);
    }

    //Чекбокс - созвездия

    if(document.getElementById('checkbox3').checked) {
        cfg.constellations.lines = true;
        Celestial.display(cfg);
    } else {
        cfg.constellations.lines = false;
        Celestial.display(cfg);
    }

    //Чекбокс - млечный путь

    if(document.getElementById('checkbox4').checked) {
        cfg.mw.show = true;
        Celestial.display(cfg);
    } else {
        cfg.mw.show = false;
        Celestial.display(cfg);
    }
}

// var planets = {"sol": "Sun", "mer": "Mercury", "ven": "Venus", "lun": "Moon", "mar": "Mars", "jup": "Jupiter", 
//                "sat": "Saturn", "ura": "Uranus", "nep": "Neptune", "cer": "Ceres", "plu": "Pluto"}
//     follow = "",
//     div = d3.select("#follow");
// for (key in planets) {
//   div.append("div").attr("id", key).attr("class", "btnPlanet").html(planets[key]).on("click", function() {
//     follow = this.id;
//     cncAnimFrame(reqID);
//     p = Celestial.getPlanet(follow, dt);

//     Celestial.rotate({center: p.ephemeris.pos});
//   })
// }

function animate() {
    dt.setDate(dt.getDate()+1);
    Celestial.date(dt);
    reqID = reqAnimFrame(animate);
    
    //if (follow === "") return;
}

d3.select('#celestial-map').on('mousedown', function() { cncAnimFrame(reqID) } )
d3.select('#celestial-map').on('mouseup', function() { reqAnimFrame(animate) } )

reqID = reqAnimFrame(animate);