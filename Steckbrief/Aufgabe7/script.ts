    /* Body */

    function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('lightblue') });

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

//Intervall//
document.querySelector(".playbutton").addEventListener("click", function(){
    setInterval(function() {
        playbutton();
    }, 500);
    });

// Funktion  für PlayButton

function playbutton(){
    
    drumpad[2].play();
    drumpad[3].play();
    drumpad[4].play();

};

function playSample(i :number){
    drumpad[i].play();
};


//einzelne buttons//
document.querySelector(".drumpad1").addEventListener("click", function(){
    playSample(0);
    });

document.querySelector(".drumpad2").addEventListener("click", function(){
    playSample(1);
    });

document.querySelector(".drumpad3").addEventListener("click", function(){
    playSample(2);
    });
    
document.querySelector(".drumpad4").addEventListener("click", function(){
    playSample(3);
    });

document.querySelector(".drumpad5").addEventListener("click", function(){
    playSample(4);
    });

document.querySelector(".drumpad6").addEventListener("click", function(){
    playSample(5);
    });

document.querySelector(".drumpad7").addEventListener("click", function(){
    playSample(6);
    });

document.querySelector(".drumpad8").addEventListener("click", function(){
    playSample(7);
    });

document.querySelector(".drumpad9").addEventListener("click", function(){
    playSample(8);
    });
