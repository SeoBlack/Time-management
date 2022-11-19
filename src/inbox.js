import initwebsite, { createIcon } from "./init";
import { createForm } from "./init";
import { showForm } from "./init";
import { allTasks } from "./init";
import { changeTaskState, deleteTask } from "./todos";
import { displayTaskRow } from "./init";

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
        tasksContainer.appendChild(displayTaskRow(task,true));

        ////////the next lines are done by displayTaskRow function !!!
        
        // const taskRow = document.createElement("div");
        // taskRow.classList.add("task-row");

        // const taskTitle = document.createElement("p");
        // taskTitle.classList.add("task-title");
        // if(task.isSubtask){
        //     taskTitle.textContent = `${task.title}(${task.project.name})`;
        // }
        // else{
        //     taskTitle.textContent = task.title;
        // }
        // changeTaskState(taskTitle,task);
        // taskTitle.addEventListener("click",()=>{
        //     if(task.state === true){
        //         task.state = false;
        //         changeTaskState(taskTitle,task);
                
        //     }
        //     else if(task.state === false){
        //         task.state = true;
        //         changeTaskState(taskTitle,task);
        //     }

        // })

        // const deleteTaskBtn = createIcon("fa-solid","fa-trash");
        // deleteTaskBtn.addEventListener("click",(e) => {
        //     deleteTask(task);
        // })
        // const dueDate = document.createElement("input");
        // dueDate.setAttribute("type","date");
        // dueDate.classList.add("due-date");
        // if(task.dueDate){
        //     dueDate.value = task.dueDate;
        // }
        // dueDate.addEventListener("input",(e)=>{
        //     task.dueDate = e.target.value;
        //     console.log(task.dueDate);
        // })
        
        // const dueDateContainer = document.createElement("div");
        // dueDateContainer.classList.add("duedate-container");

        // const taskIcon = document.createElement("i");
        // taskIcon.classList.add("fa-solid");
        // taskIcon.classList.add(`${task.icon}`);
        
        // dueDateContainer.appendChild(dueDate);
        // dueDateContainer.appendChild(deleteTaskBtn);
        // taskTitle.appendChild(taskIcon);
        // taskRow.appendChild(taskTitle);
        // taskRow.appendChild(dueDateContainer);
        
        

        // tasksContainer.appendChild(taskRow);
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