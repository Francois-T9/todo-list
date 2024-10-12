const formPopup=(projectName)  => {
    const todosContainer=document.querySelector(`.main-container #${projectName} #todos-${projectName}`);

    const todoHeader=document.createElement("div");
    todoHeader.className=`todo-header`;
    todoHeader.id=`${projectName}-todo-header`;

    const todoTitle=document.createElement("div");
    todoTitle.className=`todo-title`;
    todoTitle.id=`${projectName}-todo-title`;

    todoTitle.textContent=`Add todo to ${projectName}`;

    const closeButton=document.createElement('button');
    closeButton.className=`close-button`;
    closeButton.id=`${projectName}-close-button`;
    closeButton.textContent=`X`;

    todoHeader.append(todoTitle,closeButton);

    const todoForm=document.createElement("form");
    todoForm.className=`todo-form`;
    todoForm.id=`${projectName}-todo-form`;
    todoForm.textContent="osidjfoisdjfgoidfjgodifj";

    todosContainer.append(todoHeader,todoForm);



    // DISPLAY TODO
    const addTodoButton=document.querySelector(`.main-container #${projectName} #add-todo-to-${projectName}`);
    const closeTodo=document.querySelector("#test-close-button");
    
    const overlay=document.querySelector("#overlay");
    const todoFormSelector=document.querySelector(`.main-container #${projectName} .todos`);

    addTodoButton.addEventListener("click",() =>{
        toggleAddTodo(todoFormSelector)  //should take the form class
    }
    )

    closeTodo.addEventListener("click",() =>{
        removeTodoPopup(todoFormSelector)  //should take the form class
    }
    )

    function toggleAddTodo(todo) {
        if(todo==null) return
        todo.classList.add("active")
        overlay.classList.add('active');
    }

    function removeTodoPopup(todo) {
        if(todo==null) return
        todo.classList.remove("active")
        overlay.classList.remove('active');
    }

};

export {formPopup};
