import {CreateProject,deleteProject} from "./create-project.js";
import { getProjectName } from "./get-project-name.js";
import { DisplayProjectName } from "./display-project.js";
import { formPopup } from "./todo-form-popup.js";
import { compareAsc, format } from "date-fns";
import "./styles.css";



const handleClick=(() => {   

    DisplayProjectName(CreateProject("Default")); //creates a default project with the name "Default"
    deleteProject();
    let projectIdArray=["Default"];

    formPopup(projectIdArray[0]);                           //creates a project in the DOM and display it
    const createProjectButton=document.querySelector("#sidebar-create-project-button");
    createProjectButton.addEventListener("click", () => {
        

        let projectName=getProjectName();
        projectIdArray.push((CreateProject(projectName)));
        deleteProject();
        DisplayProjectName();
        formPopup(projectName);


        
        
    })
})();


