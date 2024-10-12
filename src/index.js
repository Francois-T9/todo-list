import {CreateProject,deleteProject} from "./create-project.js";
import { getProjectName } from "./get-project-name.js";
import { DisplayProjectName } from "./display-project.js";
import { createTodo } from "./create-todo.js";
import { formPopup } from "./todo-form-popup.js";
import { compareAsc, format } from "date-fns";
import "./styles.css";



DisplayProjectName(CreateProject("Default")); //creates a default project with the name "Default"


deleteProject();

let projectIdArray=["Default"];

const handleClick=(() => { //creates a project in the DOM and display it
    const createProjectButton=document.querySelector("#sidebar-create-project-button");
    createProjectButton.addEventListener("click", () => {
       
        projectIdArray.push((CreateProject(getProjectName())));
        deleteProject();
        DisplayProjectName();
        console.log(projectIdArray);

        
        projectIdArray.forEach((projectId) => {
            let addTodoButtons=document.querySelector(`.main-container .project #add-todo-to-${projectId}`);
            addTodoButtons.addEventListener("click",() => {
                console.log(`clicked ${projectId} button`)
                formPopup(`${projectId}`);
                // createTodo(`${projectId}`);
            })
            console.log(addTodoButtons);
            
        })
    })
})();




document.querySelector(".main-container .project button").addEventListener("click",() => {
    console.log("todo added to project defaults")
    createTodo("Default");
});


