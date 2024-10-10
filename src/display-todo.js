const displayTodo= (todo) => {
    const todoContainer=document.querySelector(".todo-container");
    const todoItem=document.createElement("div");
    todoItem.className=todo.title;

    todoContainer.appendChild(todoItem);


    const todoTitle=document.createElement("h3");
    todoTitle.textContent=todo.title;
    const todoDescription=document.createElement("p");
    todoDescription.id="todo-description";
    todoDescription.textContent=todo.description;
    const todoDueDate=document.createElement("p");
    todoDueDate.id="todo-due-date";
    todoDueDate.textContent=todo.dueDate;
    const todoPriority=document.createElement("p");
    todoPriority.id="todo-priority";
    todoPriority.textContent=todo.priority;

    todoItem.append(todoTitle,todoDescription,todoDueDate,todoPriority);

}
    
    

export {displayTodo};