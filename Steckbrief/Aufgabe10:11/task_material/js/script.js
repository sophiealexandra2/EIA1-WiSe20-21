var todosArray = [
    {
        text: "Task1",
        checked: false
    },
    {
        text: "Task2",
        checked: false
    },
    {
        text: "Task3",
        checked: false
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
/**
   Zwei neue hinzugefügt+ArtyomOn
    */
var OffenDOMElement;
var DoneDOMElement;
var artyomOn = false;
window.addEventListener("load", function () {
    /**
    Zwei neue hinzugefügt
     */
    OffenDOMElement = document.querySelector("#Offen");
    DoneDOMElement = document.querySelector("#Done");
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
            + todosArray[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < todosArray.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
var Done = 1;
var OffenerTask = 2;
function updateCounter() {
    counterDOMElement.innerHTML = todosArray.length + " in total";
    OffenDOMElement.innerHTML = OffenerTask + " tasks open";
    DoneDOMElement.innerHTML = Done + " tasks done";
}
function addTodo(text) {
    if (inputDOMElement.value != "") {
        todosArray.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        OffenerTask++;
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todosArray[index].checked = !todosArray[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    todosArray.splice(index, 1);
    drawListToDOM();
}
//Artyom:
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["Erstelle Aufgabe *"],
        action: function (i, wildcard) {
            artyomOn = true;
            addTodo(wildcard);
        }
    });
    document.querySelector("#start-voice").addEventListener("click", function () {
        artyom.dontObey();
        artyom.initialize({
            lang: "de-DE"
        });
        artyom.say("Hey Hey! Sag mir, was du heute erledigen willst.");
        setTimeout(function () {
            artyom.obey();
        }, 8000);
        startArtyom();
    });
    document.querySelector("#stop-voice").addEventListener("click", function () {
        stopArtyom();
        artyom.say("See ya");
    });
    function startArtyom() {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true,
            speed: 1
        });
    }
    function stopArtyom() {
        artyom.fatality();
    }
});
//# sourceMappingURL=script.js.map