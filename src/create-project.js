import closeImg from './img/window-close.svg';


const CreateProject= (name) => {
    const projectSidebar=document.querySelector(".sidebar-projects");
    const mainContainer=document.querySelector(".main-container");

    
    if(name==null) {
        
    }
    else {
        const projectDivSidebar=document.createElement("div");
        projectDivSidebar.className=`${name}`;
        
        const projectSelector=document.createElement("button");
        
        projectSelector.id=`${name}`;            // to be chosen by user
        projectSelector.textContent=`${name}`;      // to be chosen by user
        const closeButton=document.createElement("img");
        closeButton.src=closeImg;
        projectDivSidebar.append(projectSelector,closeButton);
        projectSidebar.appendChild(projectDivSidebar);
        
        const projectContainer=document.createElement("div");
        projectContainer.className="project";
        projectContainer.id=name;
        
        // const todoContainer=document.createElement("div");
        // todoContainer.className=`todo-${name}`;

        const todoBtn=document.createElement("button");
        todoBtn.className=`add-todo`;
        todoBtn.id=`add-todo-to-${name}`;
        todoBtn.textContent="Add todo";

        const allTodosContainer=document.createElement("div");
        allTodosContainer.className=`todo-form-container`;
        allTodosContainer.id=`todo-form-project-${name}`;

       

        projectContainer.append(todoBtn,allTodosContainer);
        mainContainer.appendChild(projectContainer);
        return(name);
        
    }
    
};

const deleteProject = () => {
    const SidebarProjectsContainer = document.querySelectorAll(".sidebar-projects > div > img");


   
    SidebarProjectsContainer.forEach((elem) => {
        elem.addEventListener("click", () => {
            const projectClassName = elem.parentNode.className;
            console.log(`Attempting to delete project: ${projectClassName}`);

            const projectContainer = document.querySelector(`.main-container #${projectClassName}`);
            console.log(projectContainer);

            if (projectContainer) {
                projectContainer.remove();
                console.log(`Removed project container: ${projectClassName}`);
            } else {
                console.warn(`Project container for ${projectClassName} not found.`);
            }

            elem.parentNode.remove();
            console.log(`Removed sidebar element: ${projectClassName}`);
        });
    });
};






export {CreateProject,deleteProject};