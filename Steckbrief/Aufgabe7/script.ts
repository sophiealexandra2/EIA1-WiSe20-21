    /* Body */

    function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('lightblue') });

//Sounds//
var drumpad = ;;
drumpad[0] = new Audio("./assets/snare.mp3");
drumpad[1] = new Audio("./assets/G.mp3");
drumpad[2] = new Audio("./assets/F.mp3");
drumpad[3] = new Audio("./assets/C.mp3");
drumpad[4] = new Audio("./assets/A.mp3");
drumpad[5] = new Audio("./assets/kick.mp3");
drumpad[6] = new Audio("./assets/hihat.mp3");
drumpad[7] = new Audio("./assets/laugh-1.mp3");
drumpad[8] = new Audio("./assets/laugh-2.mp3");

