import {CreateProject} from "./create-project.js";
import { getProjectName } from "./get-project-name.js";
import { DisplayProjectName } from "./display-project.js";
import "./styles.css";



DisplayProjectName(CreateProject("Default")); //creates a default project with the name "Default"

const handleClick=(() => { //creates a project in the DOM and display it
    const createProjectButton=document.querySelector("#create-button");
    createProjectButton.addEventListener("click", () => {
        CreateProject(getProjectName());
        DisplayProjectName();
    })
})();




