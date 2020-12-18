const trashIcon: HTMLElement = document.querySelector(".fas fa-trash-alt");
const newTask: any = document.querySelector("#addNewTasks");
const liElement: HTMLElement = document.querySelector(".element");
let listIndex: number = 0;





function anzahl(): void {
    document.querySelector("h3").innerHTML = listIndex + " in total";
}

function createElement (): void {
    let myLi: HTMLElement = document.createElement("li");
    myLi.className = "element";
    let trashIcon: HTMLElement = document.createElement("i");
    trashIcon.className = "fas fa-trash-alt";
    let textInput: HTMLSpanElement = document.createElement("span");
    textInput.innerHTML = newTask.value;
    let circleIcon: HTMLElement = document.createElement("i");
    circleIcon.className = "fal fa-circle";
    let checkedIcon: HTMLElement = document.createElement("i");
    checkedIcon.className = "fas fa-check hidden";
    

    
    document.querySelector("#myList").appendChild(myLi);
    myLi.appendChild(trashIcon);
    myLi.appendChild(textInput);
    myLi.appendChild(circleIcon);
    myLi.appendChild(checkedIcon);
    
    document.querySelector(".add").addEventListener("click", function(): void {
        createElement();
        
    });

    circleIcon.addEventListener("click", function(): void {
        if (checkedIcon.classList.contains("hidden")) {
            checkedIcon.classList.remove("hidden");
        }   
            else { 
                checkedIcon.classList.add("hidden");

            }
   
    });

    trashIcon.addEventListener("click", function(): void {
        document.querySelector("#myList").removeChild(myLi);
        listIndex--;
        anzahl();
    });

    listIndex++;
    anzahl();

}


newTask.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        createElement();
        //console.log(list.length);
    }

});


