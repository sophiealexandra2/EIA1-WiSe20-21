//Sounds//
var drumpad = [];
drumpad[0] = new Audio("./assets/snare.mp3");
drumpad[1] = new Audio("./assets/G.mp3");
drumpad[2] = new Audio("./assets/F.mp3");
drumpad[3] = new Audio("./assets/C.mp3");
drumpad[4] = new Audio("./assets/A.mp3");
drumpad[5] = new Audio("./assets/kick.mp3");
drumpad[6] = new Audio("./assets/hihat.mp3");
drumpad[7] = new Audio("./assets/laugh-1.mp3");
drumpad[8] = new Audio("./assets/laugh-2.mp3");
//einzelne buttons//
document.querySelector(".drumpad1").addEventListener("click", function () {
    playSample(0);
    recbeat(drumpad[0]);
});
document.querySelector(".drumpad2").addEventListener("click", function () {
    playSample(1);
    recbeat(drumpad[1]);
});
document.querySelector(".drumpad3").addEventListener("click", function () {
    playSample(2);
    recbeat(drumpad[2]);
});
document.querySelector(".drumpad4").addEventListener("click", function () {
    playSample(3);
    recbeat(drumpad[3]);
});
document.querySelector(".drumpad5").addEventListener("click", function () {
    playSample(4);
    recbeat(drumpad[4]);
});
document.querySelector(".drumpad6").addEventListener("click", function () {
    playSample(5);
    recbeat(drumpad[5]);
});
document.querySelector(".drumpad7").addEventListener("click", function () {
    playSample(6);
    recbeat(drumpad[6]);
});
document.querySelector(".drumpad8").addEventListener("click", function () {
    playSample(drumpad[7]);
    recbeat(drumpad[7]);
});
document.querySelector(".drumpad9").addEventListener("click", function () {
    playSample(drumpad[8]);
    recbeat(drumpad[8]);
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
function playbutton() {
    drumpad[3].play();
    drumpad[0].play();
    rumpad[5].play();
    drumpad[8].play();
}
function playSample(i) {
    drumpad[i].play();
}
//# sourceMappingURL=script1.js.map