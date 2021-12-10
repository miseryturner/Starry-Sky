var cfg = Celestial.settings().set({
    zoomlevel: 1.1,    // Начальный зум
    zoomextend: 1.1,     // Максимальный зум
    interactive: true,  // Возможность приближать и вращать карту
    geopos: [0,0],
    location: true,
    form: true, // Форма
    // formFields: { // Поля для формы
    //     "location": false,
    //     "general": false,
    //     "stars": false, 
    //     "dsos": false, 
    //     "constellations": false, 
    //     "lines": false, 
    //     "other": false
    // },
    controls: false,
    land: 'ru',
    advanced: false,
    follow: "center",
    projection: "orthographic",
    datapath: "https://ofrohn.github.io/data/",
    mw: {
        show: false
    },
    planets: { 
        show: false 
    },
    stars: { //звёзды
        names: false,
        limit: 4.6 
    },
    dsos: {
        show: false
    },
    constellations: { // Показывать названия созвездий
        names: false,      
        namesType: "ru", // Язык для названий созвездий
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
console.log(cfg);
function chengeVarables() {
    console.log('fun chengeVarables');
    if(document.getElementById('checkbox4').checked) {
        cfg.mw.show = true;
        console.log('checked');
    } else {
        cfg.mw.show = false;
        console.log('dontChecked');
    }
}
Celestial.display(cfg);

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