import loadInbox from "./inbox";
import loadToday from "./today";
import loadWeek from "./week";
import loadProject from "./todos";
import { Project,Task } from "./todos";

const allProjects = [];
const allTasks    = [];

const icons = ["fa-cubes-stacked","fa-bars-progress","fa-walkie-talkie","fa-drumstick-bite","fa-thumbtack","fa-plane-departure","fa-face-grin-tongue-squint","fa-boxes-stacked","fa-mask","fa-masks-theater","fa-mask-ventilator","fa-mask-face","fa-basketball","fa-flask"];
function createHeader(){
    const header  = document.createElement("header");
    header.classList.add("header");

    const title   = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Todo List";

    header.appendChild(createIcon("fa-solid","fa-list-check"));
    header.appendChild(title);

    return header;

}

function createSideBar(){
    const sideBar   = document.createElement("div");
    sideBar.classList.add("sidebar");

    const inboxBtn = createBtn("Inbox","inbox-btn");
    
    inboxBtn.addEventListener('click',(e)=>{
        if(e.target.classList.contains("active")) return;
        setActiveBtn(inboxBtn);
        loadInbox()
    });

    const todayBtn = createBtn("Today","today-btn");
    todayBtn.addEventListener('click',(e) =>{
        if(e.target.classList.contains("active")) return;
        setActiveBtn(todayBtn);
        loadToday();
    });

    const weekBtn = createBtn("This Week","week-btn");
    weekBtn.addEventListener('click',(e) =>{
        if(e.target.classList.contains("active")) return;
        setActiveBtn(weekBtn);
        loadWeek();
    });

    const projects = document.createElement("div");
    projects.classList.add("projects-tab");

    const projectHeading = document.createElement("h2");
    projectHeading.classList.add("project-heading");
    projectHeading.textContent = "Projects";

    const projectList = document.createElement("div");
    projectList.classList.add("projects-list");
/////////projects loader
    allProjects.forEach(project =>{
        const newProjectBtn = createBtn(project.name,"btn");
        newProjectBtn.addEventListener('click', (e) =>{
            if (e.target.classList.contains("active")) return;
            setActiveBtn(newProjectBtn);
            loadProject(project);
        });
        newProjectBtn.appendChild(createIcon("fa-solid",project.icon));
        projectList.appendChild(newProjectBtn);
    })

    const addProjectBtn = createBtn("Add Project", "add-project-btn");
    addProjectBtn.addEventListener("click",(e) => {
        showForm();
    })
    inboxBtn.appendChild(createIcon("fa-solid","fa-inbox"));
    todayBtn.appendChild(createIcon("fa-solid","fa-calendar-day"));
    weekBtn.appendChild(createIcon("fa-solid","fa-calendar-week"));
    addProjectBtn.appendChild(createIcon("fa-solid","fa-plus"));
    projectList.appendChild(addProjectBtn)
    projectList.appendChild(createProjectForm());
    projects.appendChild(projectHeading);
    projects.appendChild(projectList);

    sideBar.appendChild(inboxBtn);
    sideBar.appendChild(todayBtn);
    sideBar.appendChild(weekBtn);
    sideBar.appendChild(projects);

    return sideBar;



}
export function createIcon(class1,class2){
    const icon = document.createElement("i");
    icon.classList.add(class1);
    icon.classList.add(class2);
    return icon;
}
function createFooter(){
    const footer          = document.createElement("footer");
    footer.classList.add("footer");
    const copyWrite       = document.createElement("p");
    const githubLogo      = document.createElement("i");
    const githubLink      = document.createElement("a");
    copyWrite.textContent = "This project is part of TOP curriculum";
    copyWrite.classList.add("copywrite");
    githubLink.classList.add("github-link");
    githubLink.setAttribute("href","https://github.com/SeoBlack");
    githubLogo.classList.add("fa-brands");
    githubLogo.classList.add("fa-github");
    githubLogo.classList.add ("github-logo");
    githubLink.appendChild(githubLogo);
    footer.appendChild(githubLink);
    footer.appendChild(copyWrite);

    return footer;

}

function createBtn(name, className){
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add(`${className}`);
    btn.textContent = name;
    return btn;
}
function setActiveBtn(btn){
    const buttons = document.querySelectorAll(".sidebar .btn")
    buttons.forEach((button) => {
        if(button !== this){
            button.classList.remove("active");
        }
    });
    btn.classList.add("active");
}
function showForm(){
    const form = document.querySelector(`.project-form`);
    const addBtn = document.querySelector(`.add-project-btn`);
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden");
        addBtn.classList.add("hidden");
    }
    else
    {
        form.classList.add("hidden");
        addBtn.classList.remove("hidden");
    }

}
function createProjectForm(){
    const form = document.createElement("div");
    form.classList.add("project-form");
    form.classList.add("hidden");

    const projectName = document.createElement("input");
    projectName.setAttribute("type","text");
    projectName.placeholder = "Project Name";
    projectName.classList.add("project-name");

    const addProjectBtn = createBtn("Add","project-add-btn");
    addProjectBtn.addEventListener("click",(e)=>{
        if(projectName.value === "") return;
        addProject(projectName.value);
        
    });
    
    const cancelBtn = createBtn("Cancel","cancel");
    cancelBtn.addEventListener("click",showForm);

    form.appendChild(projectName);
    form.appendChild(addProjectBtn);
    form.appendChild(cancelBtn);

    return form;

}
export function createTaskForm(){
    const form = document.createElement("div");
    form.classList.add("task-form");
    // form.classList.add("hidden");
    const taskName = document.createElement("input");
    taskName.setAttribute("type","text");
    taskName.placeholder = "Task Name";
    taskName.classList.add("task-name");
    const addBtn = createBtn("Add","task-add-btn");
    
    const cancelBtn = createBtn("Cancel","cancel");
    cancelBtn.addEventListener("click",showForm);
    form.appendChild(taskName);
    form.appendChild(addBtn);
    form.appendChild(cancelBtn);

    return form;
}
function getRandom (list) {
  return list[Math.floor((Math.random()*list.length))];
}
function addProject(projectName){ 

    const newProject = new Project(projectName,getRandom(icons));
    allProjects.push(newProject);
    initwebsite();

}

function initwebsite(){
    const main = document.querySelector(".main");
    main.textContent = "";

    const contents = document.createElement("div");
    contents.classList.add("contents");



    main.appendChild(createHeader());
    main.appendChild(createSideBar());
    main.appendChild(createFooter());
    main.appendChild(contents);
}

export default initwebsite;
