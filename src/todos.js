import initwebsite, { createIcon, showForm , createForm, displayTaskRow} from "./init";
import { allTasks } from "./init";
import { arrayRemove } from "./init";
export class Project{
    constructor(projectName,icon){
        this.name = projectName;
        this.subtasks    = [];
        this.icon = icon;
    }
}
export class Task{
    constructor(icon,title,project,isSubtask,dueDate){
        this.icon    = icon;
        this.title   = title;
        this.state   = false;
        this.project = project;
        this.isSubtask = isSubtask;
        this.dueDate    = dueDate;
    }
}
function createProject(project){
    const newProject = document.createElement("div");
    newProject.classList.add("project-container");

    const projectHeading = document.createElement("h2");
    projectHeading.classList.add("head");
    projectHeading.textContent = project.name;

    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("subtasks-container");

    project.subtasks.forEach(subtask => {
        tasksContainer.appendChild(displayTaskRow(subtask,false));


        ////////the next lines are done by displayTaskRow function !!!

        // const taskRow = document.createElement("div");
        // taskRow.classList.add("task-row");

        // const taskTitle = document.createElement("p");
        // taskTitle.classList.add("task-title");
        // taskTitle.textContent = subtask.title;
        // changeTaskState(taskTitle,subtask);
        // taskTitle.addEventListener("click",()=>{
        //     if(subtask.state === true){
        //         subtask.state = false;
        //         changeTaskState(taskTitle,subtask);
        //     }
        //     else if(subtask.state === false){
        //         subtask.state = true;
        //         changeTaskState(taskTitle,subtask);
        //     }
                

        // });
        // const dueDate = document.createElement("input");
        // dueDate.setAttribute("type","date");
        // dueDate.classList.add("due-date");

        // if(subtask.dueDate){
        //     dueDate.value = subtask.dueDate;
        // }
        // dueDate.addEventListener("input",(e)=>{
        //     subtask.dueDate = e.target.value;
        // })

        // const taskIcon = document.createElement("i");
        // taskIcon.classList.add("fa-solid");
        // taskIcon.classList.add(`${subtask.icon}`);

        // taskTitle.appendChild(taskIcon);
        // taskRow.appendChild(taskTitle);
        // taskRow.appendChild(dueDate);

        // tasksContainer.appendChild(taskRow);        

    });

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-subtask-btn");
    addTaskBtn.classList.add("btn");
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.addEventListener("click", ()=> {
        showForm("add-subtask-form","add-subtask-btn");

    })

    addTaskBtn.appendChild(createIcon("fa-solid","fa-plus"));
    
    tasksContainer.appendChild(addTaskBtn);
    tasksContainer.appendChild(createForm("subtask"))
    newProject.appendChild(projectHeading);
    newProject.appendChild(tasksContainer);

    return newProject;
    
}
export function changeTaskState(taskTitle,task){
    if(task.state === true){
        //task done
        taskTitle.classList.add("done");
        
    }
    else if(task.state === false){
        //not done 
        taskTitle.classList.remove("done");
    }

}
export function deleteTask(task){
    if(task.isSubtask)
        arrayRemove(task.project.subtasks,task);
    arrayRemove(allTasks,task);
    return initwebsite();
}
function loadProject(project){
    const content = document.querySelector(".contents");
    content.textContent = "";
    content.appendChild(createProject(project));

}
export default loadProject;
