interface TodoInterface {
    text: string;
    checked: boolean;
}

var todosArray: TodoInterface[] = [
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

var inputDOMElement: HTMLInputElement; 
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
 /**
    Zwei neue hinzugefügt+ArtyomOn
     */
var OffenDOMElement: HTMLElement;
var DoneDOMElement: HTMLElement;
var artyomOn: boolean = false;



window.addEventListener("load", function(): void {
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

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todosArray.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML =  "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                            + todosArray[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}
var Done: number = 1;
var OffenerTask: number = 2;

function updateCounter(): void {
    counterDOMElement.innerHTML = todosArray.length + " in total";
    OffenDOMElement.innerHTML = OffenerTask + " tasks open";
    DoneDOMElement.innerHTML = Done + " tasks done";
}

function addTodo(text: string): void {
    if (inputDOMElement.value != "") {
        todosArray.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        OffenerTask ++;
        drawListToDOM();
    }
}
function toggleCheckState(index: number): void {
    todosArray[index].checked = !todosArray[index].checked;
    drawListToDOM();
}

function deleteTodo(index: number): void {
    todosArray.splice(index, 1);
    drawListToDOM();
}

//Artyom:

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["Erstelle Aufgabe *"],
        action: function (i: any, wildcard: string): void {
            artyomOn = true;
            addTodo(wildcard);
        }
    });

    document.querySelector("#start-voice").addEventListener("click", function(): void {
        artyom.dontObey();
        artyom.initialize({
            lang: "de-DE"
        });
        artyom.say("Hey Hey! Sag mir, was du heute erledigen willst.");
        setTimeout(function (): void {
            artyom.obey();
        }, 8000);
        startArtyom();
    });
    document.querySelector("#stop-voice").addEventListener("click", function(): void {
        stopArtyom();
        artyom.say("See ya");
    });

    function startArtyom(): void {
        artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true,
                speed: 1
        });
    }
    function stopArtyom(): void {
        artyom.fatality();
    }
});