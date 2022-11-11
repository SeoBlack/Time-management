import { createIcon } from "./init";
import { createForm } from "./init";
import { showForm } from "./init";
import { allTasks } from "./init";
import { changeTaskState } from "./todos";

function createInbox(){
    const inbox = document.createElement("div");
    inbox.classList.add("inbox-container");

    const inboxHeading = document.createElement("h2");
    inboxHeading.classList.add("head");
    inboxHeading.textContent = "Inbox";

    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("btn");
    addTaskBtn.classList.add("add-task-btn")
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.addEventListener("click",()=>{
        showForm("add-task-form","add-task-btn");
    })
    allTasks.forEach(task =>{
        const taskRow = document.createElement("div");
        taskRow.classList.add("task-row");

        const taskTitle = document.createElement("p");
        taskTitle.classList.add("task-title");
        if(task.isSubtask){
            taskTitle.textContent = `${task.title}(${task.project.name})`;
        }
        else{
            taskTitle.textContent = task.title;
        }
        
        changeTaskState(taskTitle,task);
        taskTitle.addEventListener("click",()=>{
            if(task.state === true){
                task.state = false;
                changeTaskState(taskTitle,task);
                
            }
            else if(task.state === false){
                task.state = true;
                changeTaskState(taskTitle,task);
            }

        })

        const taskIcon = document.createElement("i");
        taskIcon.classList.add("fa-solid");
        taskIcon.classList.add(`${task.icon}`);

        taskRow.appendChild(taskIcon);
        taskRow.appendChild(taskTitle);

        tasksContainer.appendChild(taskRow);
    })
    addTaskBtn.appendChild(createIcon("fa-solid","fa-plus"));
    tasksContainer.appendChild(addTaskBtn);
    tasksContainer.appendChild(createForm("task"));
    inbox.appendChild(inboxHeading);
    inbox.appendChild(tasksContainer);

    return inbox;
    
}

function loadInbox(){
    const content = document.querySelector(".contents");
    content.textContent = "";
    content.appendChild(createInbox());

}

export default loadInbox;