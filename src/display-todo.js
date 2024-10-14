import closeImg from './img/window-close.svg';


const displayTodo= (projectName,todoObject) => {
    const projectContainer=document.querySelector(`.main-container #${projectName}`);

    const todoDisplay=document.createElement("div");
    todoDisplay.className="todo-display";
    todoDisplay.id=`project-${projectName}-todo-${todoObject.name}`;  //select name of the todo object

    const todoTitleContainer=document.createElement("h1");
    todoTitleContainer.textContent=todoObject.name;

    const todoDescriptionContainer=document.createElement("p");
    todoDescriptionContainer.textContent=todoObject.description;

    const todoDateContainer=document.createElement("p");
    todoDateContainer.textContent=todoObject.date;

    const todoPriorityContainer=document.createElement("p");
    todoPriorityContainer.textContent=todoObject.priority;

    const removeTodoButton=document.createElement("img");
    removeTodoButton.src=closeImg;


    removeTodoButton.addEventListener("click",() => {
        console.log(`Removed the ${todoObject.name} todo from ${projectName}`);
        removeTodo(projectName,todoObject);
    })



    todoDisplay.append(todoTitleContainer,todoDescriptionContainer,todoDateContainer,todoPriorityContainer,removeTodoButton);

    projectContainer.appendChild(todoDisplay);

}

const removeTodo= (project,todo) => {
    const todoContainer=document.querySelector(`.main-container .project #project-${project}-todo-${todo.name} `);
    if (todoContainer) {
    
    todoContainer.remove();
    }
    


}

    
    

export {displayTodo,removeTodo};