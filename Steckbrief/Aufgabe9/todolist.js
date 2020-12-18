var Aufgabe9;
(function (Aufgabe9) {
    var trash = document.querySelector(".fas fa-trash-alt");
    var newTask = document.querySelector("#addNewTasks");
    var liElement = document.querySelector(".element");
    var listIndex = 0;
    function createElement() {
        var myLi = document.createElement("li");
        myLi.className = "element";
        var trash = document.createElement("i");
        trash.className = "fas fa-trash-alt";
        var textInput = document.createElement("span");
        textInput.innerHTML = newTask.value;
        var circleIcon = document.createElement("i");
        circleIcon.className = "fal fa-circle";
        var doneIcon = document.createElement("i");
        doneIcon.className = "fas fa-check hidden";
        document.querySelector("#myList").appendChild(myLi);
        myLi.appendChild(trash);
        myLi.appendChild(textInput);
        myLi.appendChild(circleIcon);
        myLi.appendChild(doneIcon);
        //counter of tasks
        function amount() {
            document.querySelector("h2").innerHTML = listIndex + " in total";
        }
        circleIcon.addEventListener("click", function () {
            if (doneIcon.classList.contains("hidden")) {
                doneIcon.classList.remove("hidden");
            }
            else {
                doneIcon.classList.add("hidden");
            }
        });
        trash.addEventListener("click", function () {
            document.querySelector("#myList").removeChild(myLi);
            listIndex--;
            amount();
        });
        listIndex++;
        amount();
    }
    //mit keypress enter bedienbar
    newTask.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            createElement();
            newTask.value = " ";
        }
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=todolist.js.map