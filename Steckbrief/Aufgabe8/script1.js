var Task08;
(function (Task08) {
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
    //.. 
    var trash = document.querySelector(".fa-trash-alt");
    var recbutton = document.querySelector(".fa-microphone");
    var beat = [];
    var abfrage;
    var playButton = document.querySelector(".fa-play");
    var pauseButton = document.querySelector(".fa-stop");
    var myInterval;
    var y = 0;
    //Eventlistener für Play und Pause Button
    playButton.addEventListener("click", function () {
        playSchleife(true);
        playButton.classList.add("inactive");
        pauseButton.classList.remove("inactive");
        console.log("funkt");
    });
    pauseButton.addEventListener("click", function () {
        playSchleife(false);
        pauseButton.classList.add("inactive");
        playButton.classList.remove("inactive");
        console.log("funkt");
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
                if (y < beat.length) {
                    playSample(beat[y]);
                    y++;
                }
                else {
                    y = 0;
                }
            }, 500);
        }
        else {
            clearInterval(myInterval);
        }
    }
    //Additional task as per EIA website  - in progress
    window.addEventListener("keydown", function (ArrowDown) {
        if (ArrowDown.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        switch (ArrowDown.key) {
            case "drumpad1": // IE/Edge specific value
            case "ArrowDown":
                // Do something for "down arrow" key press.
                break;
            case "drumpad2": // IE/Edge specific value
            case "ArrowUp":
                // Do something for "up arrow" key press.
                break;
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                // Do something for "left arrow" key press.
                break;
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                // Do something for "right arrow" key press.
                break;
            case "Enter":
                // Do something for "enter" or "return" key press.
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
        event.preventDefault();
    }, true);
})(Task08 || (Task08 = {}));
//# sourceMappingURL=script1.js.map