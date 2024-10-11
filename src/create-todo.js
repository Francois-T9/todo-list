const createTodo= (projectName) => {
    
    const projectContainer=document.querySelector(`.main-container .${projectName}`);

    const todoForm=document.createElement("form");
    const submitButton=document.createElement("input");
    const deleteButton=document.createElement("input");
    submitButton.setAttribute("type","submit");




    const titleLabel=document.createElement("label");
    const todoTitle=document.createElement("input");

    // const todoContainer=document.createElement("div");
    // todoContainer.id=


    todoTitle.id="todo-title";
    titleLabel.htmlFor="todo-title";
    titleLabel.textContent="Todo name";

    const descriptionLabel=document.createElement("label");
    const todoDescription=document.createElement("input");
    todoDescription.id="todo-description";
    descriptionLabel.htmlFor="todo-description";
    descriptionLabel.textContent="Descritpion";


    const dateLabel=document.createElement("label");
    const todoDueDate=document.createElement("input");
    todoDueDate.id="todo-due-date";
    dateLabel.htmlFor="todo-due-date";
    dateLabel.textContent="Due date";



    const priorityLabel=document.createElement("label");
    const todoPriority=document.createElement("input");
    todoPriority.id="todo-priority";
    priorityLabel.htmlFor="todo-priority";
    priorityLabel.textContent="Priority";



    todoForm.append(titleLabel,todoTitle,descriptionLabel,todoDescription,dateLabel,todoDueDate,priorityLabel,todoPriority,submitButton);

    projectContainer.appendChild(todoForm);
    

    
};

export {createTodo};