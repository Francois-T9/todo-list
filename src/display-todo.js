import closeImg from './img/window-close.svg';


const displayTodo= (projectName,todoObject) => {
    const projectContainer=document.querySelector(`.main-container #${projectName}`);

    const CreateTodoContainer=(() => {
        const todoContainer=document.createElement("div");
        todoContainer.className="todo-display";
        todoContainer.id=`project-${projectName}-todo-${todoObject.name}`;  //select name of the todo object
        return todoContainer;
    })();

    const AddTodoContent=(todoObject,todoContainer) => {
        
        const todoTitleContainer=document.createElement("h1");
        todoTitleContainer.textContent=todoObject.name;
        

        const todoDescriptionHeader=document.createElement("h4");
        todoDescriptionHeader.textContent="Description";

        const todoDescriptionContainer=document.createElement("p");
        todoDescriptionContainer.textContent=todoObject.description;

        const todoDateHeader=document.createElement("h4");
        todoDateHeader.textContent="Due date";
        
        const todoDateContainer=document.createElement("p");
        todoDateContainer.textContent=todoObject.date;

        const todoPriorityHeader=document.createElement("h4");
        todoPriorityHeader.textContent="Priority";
        
        const todoPriorityContainer=document.createElement("p");
        todoPriorityContainer.textContent=todoObject.priority;
        
        const removeTodoButton=document.createElement("img");
        removeTodoButton.src=closeImg;

            const SetPriorityTextColor=(() => {
                
                if(todoPriorityContainer.textContent=="Low") {
                    todoPriorityContainer.style.color="green"
                }
                else if(todoPriorityContainer.textContent=="Medium")
                {
                    todoPriorityContainer.style.color="orange"
                }
                else if(todoPriorityContainer.textContent=="High") {
                    todoPriorityContainer.style.color="red"
                }
        
        
            })();



            removeTodoButton.addEventListener("click",() => {
                console.log(`Removed the ${todoObject.name} todo from ${projectName}`);
                removeTodo(todoContainer);
            })

        // if description if empty : dont display it
        if(todoObject.description=="" || todoObject.description==null) {
            todoContainer.append(todoTitleContainer,todoDateHeader,todoDateContainer,todoPriorityHeader,todoPriorityContainer,removeTodoButton);
        }
        else {

            todoContainer.append(todoTitleContainer,todoDescriptionHeader,todoDescriptionContainer,todoDateHeader,todoDateContainer,todoPriorityHeader,todoPriorityContainer,removeTodoButton);
        }


    };
    
    
    //function call
    const todoContainer=CreateTodoContainer;
    AddTodoContent(todoObject,todoContainer);
    //
    const removeTodo= (todoContainer) => {

        // const todoContainer=document.querySelector(`.main-container .project #project-${project}-todo-${todo.name} `);
        if (todoContainer) {
        
        todoContainer.remove();
        };
    };
    
    
    projectContainer.appendChild(todoContainer);

};

export {displayTodo};