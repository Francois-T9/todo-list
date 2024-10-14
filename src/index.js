import {CreateProject,deleteProject} from "./create-project.js";
import { getProjectName } from "./get-project-name.js";
import { DisplayProjectName } from "./display-project.js";
import { displayTodo } from "./display-todo.js";
import { formPopup } from "./todo-form-popup.js";
import { compareAsc, format } from "date-fns";
import "./styles.css";


DisplayProjectName(CreateProject("Default")); //creates a default project with the name "Default"


deleteProject();

let projectIdArray=["Default"];

const handleClick=(() => {   
    formPopup(projectIdArray[0]);                           //creates a project in the DOM and display it
    const createProjectButton=document.querySelector("#sidebar-create-project-button");
    createProjectButton.addEventListener("click", () => {
        

        let projectName=getProjectName();
        projectIdArray.push((CreateProject(projectName)));
        deleteProject();
        DisplayProjectName();
        console.log(formPopup(projectName));


        
        
    })
})();


