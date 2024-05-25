//a checkboxos varázslás csak akkor legyen, ha egyáltalán van checkbox az oldalon
if(document.contains(document.getElementById('sargacb' && 'kekcb'))){
/*másik checkbox kipipálása*/
function uncheckOther(checkbox) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (cb) {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}/*jelenleg mutatott kép leváltása checkbox alapján*/

document.addEventListener('DOMContentLoaded', function() {

    var sargaCheckbox = document.getElementById("sargacb");
    var kekCheckbox = document.getElementById("kekcb");
    var dukeImage = document.getElementById("dukeImage");

    sargaCheckbox.addEventListener('change', function() {
        if (this.checked) { // Ha a sárga checkbox be van pipálva
            dukeImage.src = dukeImage.src.replace("k.png", "s.png"); // Kép módosítása sárgára
        }
    });

    kekCheckbox.addEventListener('change', function() {
        if (this.checked) { // Ha a kék checkbox be van pipálva
            dukeImage.src = dukeImage.src.replace("s.png", "k.png"); // Kép módosítása kékre
        }
    });

});



var currentIndex = 1; // jelenlegi kép indexe
var totalImages = 6; // összes kép indexe
var rctotalImages = 3;

//duke képes
function changeImage(direction) {

    var dukeImage = document.getElementById("dukeImage");
    currentIndex += direction; // index növelés/csökkentés irány szerint
    if (currentIndex < 1) {
        currentIndex = totalImages;
    } else if (currentIndex > totalImages) {
        currentIndex = 1;
    }
    dukeImage.style.left = (direction === 1) ? "800px" : "600px"; // régi kép kicsúsztatása
    dukeImage.style.opacity = "0.5"; // transition közbe régi kép eltűntetése
    dukeImage.style.opacity = "0"; // 2 lépésben hogy jobban nézzen ki
    setTimeout(function() {
      /*  képek mutatása index alapján magic   */
      if (document.getElementById("sargacb").checked) {
        dukeImage.src = "dukekepek/duke390_" + currentIndex + "s.png";
        document.getElementById("dukeImage").src = "dukekepek/duke390_" + currentIndex + "s.png"; // Sárga képek elérési útja
    } else {
        dukeImage.src = "dukekepek/duke390_" + currentIndex + "k.png"; // Kék képek elérési útja
        document.getElementById("dukeImage").src = "dukekepek/duke390_" + currentIndex + "k.png";
    }
        dukeImage.style.left = "750px"; // új képet behoz
        dukeImage.style.opacity = "1";  // miután behozta mutassa a képet
    }, 200);
     // 200 az időzítés amit lehet állítgatni
}

//RC képes
function changeImagerc(direction) {
    var dukeImage = document.getElementById("dukeImage");
    currentIndex += direction; // index növelés/csökkentés irány szerint
    if (currentIndex < 1) {
        currentIndex = rctotalImages;
    } else if (currentIndex > rctotalImages) {
        currentIndex = 1;
    }
    dukeImage.style.left = (direction === 1) ? "800px" : "600px"; // régi kép kicsúsztatása
    dukeImage.style.opacity = "0.5"; // transition közbe régi kép eltűntetése
    dukeImage.style.opacity = "0"; // 2 lépésben hogy jobban nézzen ki
    setTimeout(function() {
      /*  képek mutatása index alapján magic   */
      if (document.getElementById("sargacb").checked) {
        dukeImage.src = "rckepek/rc" + currentIndex + "s.png";
        document.getElementById("dukeImage").src = "rckepek/rc" + currentIndex + "s.png"; // Sárga képek elérési útja
    } else {
        dukeImage.src = "rckepek/rc" + currentIndex + "k.png"; // Kék képek elérési útja
        document.getElementById("dukeImage").src = "rckepek/rc" + currentIndex + "k.png";
    }
        dukeImage.style.left = "750px"; // új képet behoz
        dukeImage.style.opacity = "1";  // miután behozta mutassa a képet
    }, 200);
}
//sd képes
function changeImagesd(direction) {
    var dukeImage = document.getElementById("dukeImage");
    currentIndex += direction; // index növelés/csökkentés irány szerint
    if (currentIndex < 1) {
        currentIndex = totalImages;
    } else if (currentIndex > totalImages) {
        currentIndex = 1;
    }
    dukeImage.style.left = (direction === 1) ? "800px" : "600px"; // régi kép kicsúsztatása
    dukeImage.style.opacity = "0.5"; // transition közbe régi kép eltűntetése
    dukeImage.style.opacity = "0"; // 2 lépésben hogy jobban nézzen ki
    setTimeout(function() {
      /*  képek mutatása index alapján magic   */
      if (document.getElementById("sargacb").checked) {
        dukeImage.src = "sdkepek/superduke_" + currentIndex + "s.png";
        document.getElementById("dukeImage").src = "sdkepek/superduke_" + currentIndex + "s.png"; // Sárga képek elérési útja
    } else {
        dukeImage.src = "sdkepek/superduke_" + currentIndex + "k.png"; // Kék képek elérési útja
        document.getElementById("dukeImage").src = "sdkepek/superduke_" + currentIndex + "k.png";
    }
        dukeImage.style.left = "750px"; // új képet behoz
        dukeImage.style.opacity = "1";  // miután behozta mutassa a képet
    }, 200);
     // 200 az időzítés amit lehet állítgatni
}
// A sárga checkbox alapértelmezett bepipálása
// Kicsekkolás letiltása
document.getElementById('sargacb').addEventListener('click', function(event) {
    if (!this.checked) {
    event.preventDefault();
    return false;
    }
    });
    
    // Az alapértelmezett bepipálás letiltása
    document.getElementById('kekcb').addEventListener('click', function(event) {
        if (!this.checked) {
            event.preventDefault();
            return false;
        }
    });
};
//rc8 képes
var currentIndex = 1; // jelenlegi kép indexe
var rc8totalImages = 7;
function changeImagerc8(direction) {
    var dukeImage = document.getElementById("dukeImage");
    currentIndex += direction; // index növelés/csökkentés irány szerint
    if (currentIndex < 1) {
        currentIndex = rc8totalImages;
    } else if (currentIndex > rc8totalImages) {
        currentIndex = 1;
    }
    dukeImage.style.left = (direction === 1) ? "800px" : "600px"; // régi kép kicsúsztatása
    dukeImage.style.opacity = "0.5"; // transition közbe régi kép eltűntetése
    dukeImage.style.opacity = "0"; // 2 lépésben hogy jobban nézzen ki
    setTimeout(function() {
      /*  képek mutatása index alapján magic   */
        dukeImage.src = "RC8kepek/rc" + currentIndex + ".png";
        document.getElementById("dukeImage").src = "RC8kepek/rc" + currentIndex + ".png"; // Sárga képek elérési útja
        dukeImage.style.left = "750px"; // új képet behoz
        dukeImage.style.opacity = "1";  // miután behozta mutassa a képet
    }, 200);
     // 200 az időzítés amit lehet állítgatni
}

document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('ktmVideo');
    video.play();
});

/*Video kezelés*/
function togglePlay() {
    var video = document.getElementById('ktmVideo');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');
    video.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
}

function togglePause() {
    var video = document.getElementById('ktmVideo');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');
    video.pause();
    playButton.style.display = 'inline';
    pauseButton.style.display = 'none';
}

// Hátratekerés gomb
document.getElementById('rewindButton').addEventListener('click', function() {
    var video = document.getElementById('ktmVideo');
    video.currentTime -= 10; // 10 másodperccel visszatekerés
});

// Előretekerés gomb
document.getElementById('forwardButton').addEventListener('click', function() {
    var video = document.getElementById('ktmVideo');
    video.currentTime += 10; // 10 másodperccel előretekerés
});

//Hangerő slider
window.SetVolume = function(val)
{
    var player = document.getElementById('ktmVideo');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
}

document.addEventListener('DOMContentLoaded', function() {
    var volumeSlider = document.getElementById('vol-control');
    var player = document.getElementById('ktmVideo');

    // Hangerő állítása görgetéssel
    volumeSlider.addEventListener('wheel', function(event) {
        event.preventDefault();
        var delta = Math.sign(event.deltaY);
        var newValue = parseInt(volumeSlider.value) - delta * 5; // 5-ös lépésekkel állítjuk a hangerőt
        newValue = Math.max(0, Math.min(100, newValue)); // értékhatárok között marad
        volumeSlider.value = newValue;
        SetVolume(newValue);
    });
});

//némítás gombocska
function toggleMute() {
    var player = document.getElementById('ktmVideo');
    var muteButton = document.getElementById('mute');

    if (player.volume === 0) {
        player.volume = 1; // Unmute
        muteButton.innerHTML = '&#128266;'; // Unmute ikon
        document.getElementById('vol-control').value = 100; // Csúszka maximálisra állítása
    } else {
        player.volume = 0; // Mute
        muteButton.innerHTML = '&#128263;'; // Mute ikon
        document.getElementById('vol-control').value = 0; // Csúszka minimálisra állítása
    }
}
        function setPlaybackRate(rate) {
            var player = document.getElementById('ktmVideo');
            player.playbackRate = rate;
        }

        //Ajax jquery metódus
        $(document).ready(function() {
            // Betöltés az oldal betöltésekor
            $.getJSON('motor.json', function(data) {
                // A második objektum kiválasztása a JSON tömbből
                var motor = data[1];
        
                // Adatok hozzáadása a specifications-table táblázathoz
                var tableContent = `
                    <tr>
                        <td><b>Nyomaték:</b></td>
                        <td>${motor.nyomatek}</td>
                        <td><b>Tengelytáv:</b></td>
                        <td>${motor.tengelytav}</td>
                    </tr>
                    <tr>
                        <td><b>Súly:</b></td>
                        <td>${motor.suly}</td>
                        <td><b>Első Fék:</b></td>
                        <td>${motor.elsofek}</td>
                    </tr>
                    <tr>
                        <td><b>Sebességváltó:</b></td>
                        <td>${motor.sebessegvalto}</td>
                        <td><b>Hátsó Féktárcsa:</b></td>
                        <td>${motor.hatsofek}</td>
                    </tr>
                    <tr>
                        <td><b>Tank Kapacitás:</b></td>
                        <td>${motor.tankKapacitas}</td>
                        <td><b>ABS:</b></td>
                        <td>${motor.abs}</td>
                    </tr>
                    <tr>
                        <td><b>Hűtés:</b></td>
                        <td>${motor.hutes}</td>
                        <td><b>Indítás:</b></td>
                        <td>${motor.inditas}</td>
                    </tr>
                    <tr>
                        <td><b>Teljesítmény:</b></td>
                        <td>${motor.teljesitmeny}</td>
                        <td></td>
                        <td></td>
                    </tr>
                `;
        
                $('#specifications-table').append(tableContent);
            });
        });

//Ajax jquery metódus
        $(document).ready(function() {
            // Betöltés az oldal betöltésekor
            $.getJSON('motor.json', function(data) {
                // Az első objektum kiválasztása a JSON tömbből
                var motor = data[0];
        
                // Adatok hozzáadása a specifications-table2 táblázathoz
                var tableContent = `
                    <tr>
                        <td><b>Nyomaték:</b></td>
                        <td>${motor.nyomatek}</td>
                        <td><b>Tengelytáv:</b></td>
                        <td>${motor.tengelytav}</td>
                    </tr>
                    <tr>
                        <td><b>Súly:</b></td>
                        <td>${motor.suly}</td>
                        <td><b>Első Féktárcsa:</b></td>
                        <td>${motor.elsofek}</td>
                    </tr>
                    <tr>
                        <td><b>Sebességváltó:</b></td>
                        <td>${motor.sebessegvalto}</td>
                        <td><b>Hátsó Féktárcsa:</b></td>
                        <td>${motor.hatsofek}</td>
                    </tr>
                    <tr>
                        <td><b>Tank Kapacitás:</b></td>
                        <td>${motor.tankKapacitas}</td>
                        <td><b>ABS:</b></td>
                        <td>${motor.abs}</td>
                    </tr>
                    <tr>
                        <td><b>Hűtés:</b></td>
                        <td>${motor.hutes}</td>
                        <td><b>Indítás:</b></td>
                        <td>${motor.inditas}</td>
                    </tr>
                    <tr>
                        <td><b>Teljesítmény:</b></td>
                        <td>${motor.teljesitmeny}</td>
                        <td></td>
                        <td></td>
                    </tr>
                `;
        
                $('#specifications-table2').append(tableContent);
            });
        });