import { allTasks } from "./init";
import { displayTaskRow } from "./init";
function createWeek(){
    const thisWeek = document.createElement("div");
    thisWeek.classList.add("this-week");

    const weekHeading = document.createElement("h2");
    weekHeading.classList.add("head");
    weekHeading.textContent = "This week";

    const weekTaskContainer = document.createElement("div");
    weekTaskContainer.classList.add("week-container");
    const date = new Date();
    const currentDay = date.getDate();
    allTasks.forEach(task =>{
        const dueDate = parseInt(task.dueDate.split("-")[2])
        if(dueDate >= currentDay && dueDate <= currentDay + 6 ){
            weekTaskContainer.appendChild(displayTaskRow(task,true));
        }
    })

    thisWeek.appendChild(weekHeading);
    thisWeek.appendChild(weekTaskContainer);

    return thisWeek;
}


function loadWeek(){
    const content = document.querySelector(".contents");
    content.textContent = "";
    content.appendChild(createWeek());

}

export default loadWeek;