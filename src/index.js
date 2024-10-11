import {CreateProject,deleteProject} from "./create-project.js";
import { getProjectName } from "./get-project-name.js";
import { DisplayProjectName } from "./display-project.js";
import { createTodo } from "./create-todo.js";
import { displayTodo } from "./display-todo.js";
import { compareAsc, format } from "date-fns";
import "./styles.css";



DisplayProjectName(CreateProject("Default")); //creates a default project with the name "Default"


deleteProject();

const handleClick=(() => { //creates a project in the DOM and display it
    const createProjectButton=document.querySelector("#create-button");
    createProjectButton.addEventListener("click", () => {
        CreateProject(getProjectName());
        deleteProject();
        DisplayProjectName();
    })
})();



document.querySelector(".main-container div button").addEventListener("click",() => {
    console.log("todo added to project defaults")
    createTodo("Default");
});


