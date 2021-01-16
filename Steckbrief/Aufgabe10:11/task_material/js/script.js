var todosArray = [
    {
        text: "Task 1",
        checked: false
    },
    {
        text: "Task 2",
        checked: false
    },
    {
        text: "Task 3",
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
    addButtonDOMElement.addEventListener("click", function () {
        addTodo(inputDOMElement.value);
    });
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
var Done = 0;
var OffenerTask = 3;
function updateCounter() {
    counterDOMElement.innerHTML = todosArray.length + " in total";
    OffenDOMElement.innerHTML = OffenerTask + " Tasks Offen";
    DoneDOMElement.innerHTML = Done + " Tasks Done";
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
    if (artyomOn == true) {
        todosArray.unshift({
            text: text,
            checked: false
        });
        artyomOn = false;
        OffenerTask++;
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    if (todosArray[index].checked == true) {
        todosArray[index].checked = false;
        Done--;
        OffenerTask++;
    }
    else if (todosArray[index].checked == false) {
        todosArray[index].checked = true;
        Done++;
        OffenerTask--;
    }
    drawListToDOM();
}
function deleteTodo(index) {
    if (todosArray[index].checked == true) {
        Done--;
    }
    else if (todosArray[index].checked == false) {
        OffenerTask--;
    }
    todosArray.splice(index, 1);
    drawListToDOM();
}
/**
    +ArtyomOn
     */
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
        artyom.say("Hey Hey! Sag mir, mit dem Wort Erstelle Aufgabe was du heute erledigen möchtest");
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