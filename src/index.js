import {CreateDefault, DisplayProjectName} from "./default.js";
import { CreateProject, getProjectName } from "./create-project.js";
import "./styles.css";



const handleClick=(() => {
    const createProjectButton=document.querySelector("#create-button");
    createProjectButton.addEventListener("click", () => {
        CreateProject(getProjectName());
        DisplayProjectName();
    })
})();



DisplayProjectName(CreateDefault()); //takes name of project as argument, so creataDefault should return the project name