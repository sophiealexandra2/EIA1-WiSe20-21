//Sounds//
// tslint:disable-next-line: variable-name
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
    recbeat(Drumpad[0]);
});
document.querySelector(".drumpad2").addEventListener("click", function () {
    playSample(1);
    recbeat(Drumpad[1]);
});
document.querySelector(".drumpad3").addEventListener("click", function () {
    playSample(2);
    recbeat(Drumpad[2]);
});
document.querySelector(".drumpad4").addEventListener("click", function () {
    playSample(3);
    recbeat(Drumpad[3]);
});
document.querySelector(".drumpad5").addEventListener("click", function () {
    playSample(4);
    recbeat(Drumpad[4]);
});
document.querySelector(".drumpad6").addEventListener("click", function () {
    playSample(5);
    recbeat(Drumpad[5]);
});
document.querySelector(".drumpad7").addEventListener("click", function () {
    playSample(6);
    recbeat(Drumpad[6]);
});
document.querySelector(".drumpad8").addEventListener("click", function () {
    playSample(7);
    recbeat(Drumpad[7]);
});
document.querySelector(".drumpad9").addEventListener("click", function () {
    playSample(8);
    recbeat(Drumpad[8]);
});
var trash = document.querySelector(".fa-trash-alt");
var recbutton = document.querySelector(".fa-microphone");
var beat = [];
var abfrage;
// Funktion  für PlayButton ÄNDERN, playbutton wurde gelöscht
document.querySelector(".buttons").addEventListener("click", function () {
    setInterval(function () {
        playbutton();
    }, 500);
});
function playbutton(i) {
    Drumpad[3].play();
    Drumpad[0].play();
    Drumpad[5].play();
    Drumpad[8].play();
}
function playSample(i) {
    Drumpad[i].play();
}
recbutton.addEventListener("click", function () {
    if (recbutton.classList.contains("active")) {
        recbutton.classList.remove("active");
        abfrage = false;
    }
    else {
        recbutton.classList.add("active");
        abfrage = true;
    }
    recbeat;
});
trash.addEventListener("click", function () {
    deletingBeat();
});
function recbeat(i) {
    console.log(abfrage);
    if (abfrage == true) {
        beat.push(i);
        console.log(beat.length);
    }
}
function deletingBeat() {
    beat.splice(0, beat.length);
    console.log(beat.length);
}
var playButton = document.querySelector(".fa-play");
var pauseButton = document.querySelector(".fa-stop");
var myInterval;
var i;
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
//Funktion für Play und Pause Button
function playSchleife(b) {
    if (b == true) {
        myInterval = setInterval(function () {
            if (i < beat.length) {
                playSample(drumpad[i]);
                i++;
            }
            else {
                i = 0;
            }
        }, 500);
    }
    else {
        clearInterval(myInterval);
    }
}
//# sourceMappingURL=script1.js.map