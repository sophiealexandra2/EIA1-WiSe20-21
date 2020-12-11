//Sounds//
var Drumpad = [];
Drumpad[0] = new Audio("./assets/snare.mp3");
Drumpad[1] = new Audio("./assets/G.mp3");
Drumpad[2] = new Audio("./assets/F.mp3");
Drumpad[3] = new Audio("./assets/C.mp3");
Drumpad[4] = new Audio("./assets/A.mp3");
Drumpad[5] = new Audio("./assets/kick.mp3");
Drumpad[6] = new Audio("./assets/hihat.mp3");
Drumpad[7] = new Audio("./assets/laugh-1.mp3");
Drumpad[8] = new Audio("./assets/laugh-2.mp3");
//einzelne buttons//
document.querySelector(".drumpad1").addEventListener("click", function () {
    playSample(0);
    recbeat(0);
});
document.querySelector(".drumpad2").addEventListener("click", function () {
    playSample(1);
    recbeat(1);
});
document.querySelector(".drumpad3").addEventListener("click", function () {
    playSample(2);
    recbeat(2);
});
document.querySelector(".drumpad4").addEventListener("click", function () {
    playSample(3);
    recbeat(3);
});
document.querySelector(".drumpad5").addEventListener("click", function () {
    playSample(4);
    recbeat(4);
});
document.querySelector(".drumpad6").addEventListener("click", function () {
    playSample(5);
    recbeat(5);
});
document.querySelector(".drumpad7").addEventListener("click", function () {
    playSample(6);
    recbeat(6);
});
document.querySelector(".drumpad8").addEventListener("click", function () {
    playSample(7);
    recbeat(7);
});
document.querySelector(".drumpad9").addEventListener("click", function () {
    playSample(8);
    recbeat(8);
});
// Funktion  Drumpads, verbessert vom letzten Mal
function playSample(i) {
    Drumpad[i].play();
}
//Variabeln Rec & delete 
var trash = document.querySelector(".fa-trash-alt");
var recbutton = document.querySelector(".fa-microphone");
var beat = [];
var abfrage;
// Funktion & Variablen play pause
var playButton = document.querySelector(".fa-play");
var pauseButton = document.querySelector(".fa-stop");
var myInterval;
var x = 0;
//Eventlistener für Play und Pause Button
playButton.addEventListener("click", function () {
    playSchleife(true);
    playButton.classList.add("inactive");
    pauseButton.classList.remove("inactive");
});
pauseButton.addEventListener("click", function () {
    playSchleife(false);
    pauseButton.classList.add("inactive");
    playButton.classList.remove("inactive");
});
//Eventlistener rec & delete
recbutton.addEventListener("click", function () {
    if (recbutton.classList.contains("active")) {
        recbutton.classList.remove("active");
        abfrage = false;
    }
    else {
        recbutton.classList.add("active");
        abfrage = true;
    }
});
trash.addEventListener("click", function () {
    beat.splice(0, beat.length);
});
//Recording
function recbeat(i) {
    if (abfrage == true) {
        beat.push(i);
    }
}
//Funktion play pause
function playSchleife(b) {
    if (b == true) {
        myInterval = setInterval(function () {
            if (x < beat.length) {
                playSample(beat[x]);
                x++;
            }
            else {
                x = 0;
            }
        }, 500);
    }
    else {
        clearInterval(myInterval);
    }
}
//# sourceMappingURL=script1.js.map