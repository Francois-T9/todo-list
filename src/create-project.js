import closeImg from './img/window-close.svg';


const CreateProject= (name) => {
    const projectSidebar=document.querySelector(".sidebar-projects");
    const mainContainer=document.querySelector(".main-container");

    
    if(name==null) {
        
    }
    else {
        //  creates a project and adds it to the sidebar container
        const AddProjectToSidebar=(projectName,sidebarContainer) => {

            // function that create a container with the name of the project
            const CreateSidebarProjectContainer=(() => {
    
                const projectDivSidebar=document.createElement("div");
                projectDivSidebar.className=`${projectName}`;
    
                return projectDivSidebar;
                
            })();
    
            // inside the project container of the sidebar, we have a button to display the project, and a button to delete the project
            const AddButtonsToSidebarProjectContainer=(sidebarProjectContainer,closeButtonImage) => {
                const projectSelector=document.createElement("button");
                const closeButton=document.createElement("img");
                
                projectSelector.id=sidebarProjectContainer.className;            // to be chosen by user
                projectSelector.textContent=sidebarProjectContainer.className;    // to be chosen by user
                
                closeButton.src=closeButtonImage;
                sidebarProjectContainer.append(projectSelector,closeButton);
                sidebarContainer.appendChild(projectDivSidebar);
                
            };
            
            //function calls 
            let projectDivSidebar=CreateSidebarProjectContainer;
    
            AddButtonsToSidebarProjectContainer(projectDivSidebar,closeImg);
        }
        
        //  creates a project, defines a common class for projects in main, with an id for each project
        const AddProjectToMainContainer=(projectName,mainContainer) => {

            const CreateMainProjectContainer=(projectName) => {
                
                const projectContainer=document.createElement("div");
                projectContainer.className="project";
                projectContainer.id=projectName;
                
                return projectContainer;
                
                
            }
            //inside each main project container, we add a addTodo button, a paragraph and a form container
            const AddItemsToMainProjectContainer=(projectContainer,mainContainer) => {
                
                const todoBtn=document.createElement("button");
                const allTodosContainer=document.createElement("div");
                //create addTodo button
                todoBtn.className=`add-todo`;
                todoBtn.id=`add-todo-to-${projectContainer.id}`;
                todoBtn.textContent="Add todo";
                //create form container
                allTodosContainer.className=`todo-form-container`;
                allTodosContainer.id=`todo-form-project-${name}`;
                
                
                
                projectContainer.append(todoBtn,allTodosContainer);
                mainContainer.appendChild(projectContainer);
                
                
            }
            
            
            const projectMainContainer=CreateMainProjectContainer(projectName);
            AddItemsToMainProjectContainer(projectMainContainer,mainContainer);
        }
        
        // function calls
        AddProjectToSidebar(name,projectSidebar);  
        AddProjectToMainContainer(name,mainContainer); 
        
    }
    
};


const deleteProject = () => {
    const sidebarDeleteProjectButton = document.querySelectorAll(".sidebar-projects > div > img");


   
    sidebarDeleteProjectButton.forEach((elem) => {
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