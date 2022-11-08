import { createIcon } from "./init";
import { createTaskForm } from "./init";

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
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.addEventListener("click",createTaskForm)

    addTaskBtn.appendChild(createIcon("fa-solid","fa-plus"));
    tasksContainer.appendChild(addTaskBtn);
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