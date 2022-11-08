import { createIcon } from "./init";
export class Project{
    constructor(projectName,icon){
        this.name = projectName;
        this.subtasks    = [];
        this.icon = icon;
    }
}
export class Task{
    constructor(project,icon,title,description,dueDate){
        this.project = project;
        this.icon    = icon;
        this.title   = title;
        this.description = description;
        this.dueDate = dueDate;
    }
}
function createProject(project){
    const newProject = document.createElement("div");
    newProject.classList.add("project-container");

    const projectHeading = document.createElement("h2");
    projectHeading.classList.add("head");
    projectHeading.textContent = project.name;

    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("btn");
    addTaskBtn.textContent = "Add Task";

    addTaskBtn.appendChild(createIcon("fa-solid","fa-plus"));
    tasksContainer.appendChild(addTaskBtn);
    newProject.appendChild(projectHeading);
    newProject.appendChild(tasksContainer);

    return newProject;
    
}
function loadProject(project){
    const content = document.querySelector(".contents");
    content.textContent = "";
    content.appendChild(createProject(project));

}
export default loadProject;
