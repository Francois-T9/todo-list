import {CreateProject} from "./create-project.js";
import { getProjectName } from "./get-project-name.js";
import { DisplayProjectName } from "./display-project.js";
import { deleteProject } from "./delete-project.js";
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
        DisplayProjectName();
        deleteProject();
    })
})();



const default_todo=createTodo("Default todo","This is a default todo","10-10-2024","High");
// console.log(default_todo);

// displayTodo(default_todo);