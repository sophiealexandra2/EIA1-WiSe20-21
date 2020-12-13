
namespace Task08 {

    //Sounds//
let Drumpad: HTMLAudioElement[] = [];
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
document.querySelector(".drumpad1").addEventListener("click", function (): void  {
    playSample(0);
    recbeat(0);
    });

document.querySelector(".drumpad2").addEventListener("click", function (): void   {
    playSample(1);
    recbeat(1);
    });

document.querySelector(".drumpad3").addEventListener("click", function (): void   {
    playSample(2);
    recbeat(2);
    });
    
document.querySelector(".drumpad4").addEventListener("click", function (): void   {
    playSample(3);
    recbeat(3);
    });

document.querySelector(".drumpad5").addEventListener("click", function (): void  {
    playSample(4);
    recbeat(4);
    });

document.querySelector(".drumpad6").addEventListener("click", function (): void   {
    playSample(5);
    recbeat(5);
    });

document.querySelector(".drumpad7").addEventListener("click", function (): void   {
    playSample(6);
    recbeat(6);
    });

document.querySelector(".drumpad8").addEventListener("click", function (): void  {
    playSample(7);
    recbeat(7);
    });

document.querySelector(".drumpad9").addEventListener("click", function (): void  {
    playSample(8);
    recbeat(8);
    });

// Funktion  Drumpads, 
function playSample(i: number): void {
    Drumpad[i].play();
    
    }


    
//.. 
let trash: HTMLElement = document.querySelector(".fa-trash-alt");
let recbutton: HTMLElement = document.querySelector(".fa-microphone");
let beat: number [] = [];
let abfrage: boolean;

let playButton: HTMLElement = document.querySelector(".fa-play");
let pauseButton: HTMLElement = document.querySelector(".fa-stop");
let myInterval: number;    
let y: number = 0;


    //Eventlistener für Play und Pause Button
playButton.addEventListener("click", () => {
        playSchleife(true);
        playButton.classList.add("inactive");
        pauseButton.classList.remove("inactive"); 
        console.log("funkt");
    });

pauseButton.addEventListener("click", () => {
        playSchleife(false);
        pauseButton.classList.add("inactive");
        playButton.classList.remove("inactive");
        console.log("funkt");

    });
     //Eventlistener rec & delete
recbutton.addEventListener("click", () => {
    if (recbutton.classList.contains("active")) {
        recbutton.classList.remove("active");
        abfrage = false;
    }
    else {
        recbutton.classList.add("active");
        abfrage = true;
    }
});

trash.addEventListener("click", () => {
    beat.splice(0, beat.length);
});

//Recording
function recbeat (i: number): void   {
    if (abfrage == true) {
        beat.push(i);
    }
}


    //Funktion play pause
function playSchleife (b: boolean): void {
        if (b == true) {      
            myInterval = setInterval(function (): void  {               
            if (y < beat.length) {
            playSample(beat[y]);
            y++;
            }
            else {
            y = 0;
            }
        }, 500 );
        }
        else {
            clearInterval(myInterval);
        }
    }


} 

