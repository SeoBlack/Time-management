import { allTasks } from "./init";
import { displayTaskRow } from "./init";

function createToday(){
    const date = new Date();
    const currentDay = date.getDate();

    const today = document.createElement("div");
    today.classList.add("today-container");



    const todayHeading = document.createElement("h2");
    todayHeading.classList.add("head");
    todayHeading.textContent = "Today";

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    allTasks.forEach(task =>{
        if (!task.dueDate)
            return
        const dueDate = parseInt(task.dueDate.split("-")[2]);
        if(dueDate === currentDay ){
            taskContainer.appendChild(displayTaskRow(task,true));
        }
    })

    today.appendChild(todayHeading);
    today.appendChild(taskContainer);

    return today;

}

function loadToday(){
    const contents = document.querySelector(".contents");
    contents.textContent = "";
    contents.appendChild(createToday());

}

export default loadToday;