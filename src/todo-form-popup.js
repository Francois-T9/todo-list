import { displayTodo } from "./display-todo";



const formPopup=(projectName)  => {
    // create todo object
    
    const createTodo=(name,description,date,priority) => 
    
    {return{name,description,date,priority};
        };


    const todoFormContainer=document.querySelector(`.main-container #${projectName} #todo-form-project-${projectName}`);

    const todoFormHeader=document.createElement("div");
    todoFormHeader.className=`todo-header`;
    todoFormHeader.id=`${projectName}-todo-header`;

    const todoFormHeaderTitle=document.createElement("div");
    todoFormHeaderTitle.className=`todo-title`;
    todoFormHeaderTitle.id=`${projectName}-todo-title`;

    todoFormHeaderTitle.textContent=`Add todo to ${projectName}`;

    const closeFormButton=document.createElement('button');
    closeFormButton.className=`close-button`;
    closeFormButton.id=`${projectName}-close-button`;
    closeFormButton.textContent=`X`;

    todoFormHeader.append(todoFormHeaderTitle,closeFormButton);

    const todoForm=document.createElement("form");
    todoForm.className=`todo-form`;
    todoForm.id=`${projectName}-todo-form`;
    todoForm.setAttribute("name","todoForm");

    // elements of the todo form 

    const submitFormButton=document.createElement("input");
    submitFormButton.setAttribute("type","submit");
    submitFormButton.id=`submit-todo-to-${projectName}`;

    const empty = () => {
        let form = document.querySelector(".todo-form");
        let inputFields = form.querySelectorAll("input");
    
        for (let input of inputFields) {
            // Check if the input is valid according to its HTML attributes (e.g., required, minLength)
            if (!input.checkValidity()) {
                alert(`${input.name || 'Field'} must be filled out correctly.`);
                input.focus(); // Focus on the first invalid field
                return false;
            }
        }
        return true;
    };
    
    

    submitFormButton.addEventListener("click",(event)=> {
        event.preventDefault();
        if (!empty()) {
            return; // Stop if the empty function returns false
        }
        console.log(`todo-submited-to-${projectName}`);
        
        let getTodo=createTodo(todoFormTitle.value,todoFormDescription.value,todoFormDate.value,
            document.querySelector('input[name="priority-choice"]:checked').value);
        
        displayTodo(projectName,getTodo);

        removeTodoPopup(todoFormSelector)  //should take the form class
        console.log(getTodo);

        
       

    })


    // todo form creation in the DOM

    const titleFormLabel=document.createElement("label");
    const todoFormTitle=document.createElement("input");
    todoFormTitle.minLength=3;
    todoFormTitle.required=true;
    todoFormTitle.id="todo-form-title";
    titleFormLabel.htmlFor="todo-form-title";
    titleFormLabel.textContent="Todo name";
    

    const descriptionFormLabel=document.createElement("label");
    const todoFormDescription=document.createElement("input");
    todoFormDescription.id="todo-description";
    descriptionFormLabel.htmlFor="todo-description";
    descriptionFormLabel.textContent="Description";


    const dateFormLabel=document.createElement("label");
    const todoFormDate=document.createElement("input");
    todoFormDate.setAttribute("type","date");
    todoFormDate.required=true;
    todoFormDate.id="todo-due-date";
    dateFormLabel.htmlFor="todo-due-date";
    dateFormLabel.textContent="Due date";

    const priorityChoice={
        "Low":false,
        "Medium":false,
        "High":false
    };

    

    const priorityFormLabel=document.createElement("label");
    const priorityForm=document.createElement("div");
    priorityForm.id="todo-priorities";
    priorityForm.required=true;
    priorityFormLabel.htmlFor="todo-priority";
    priorityFormLabel.textContent="Priority";

    for(let key in priorityChoice){
        let label=document.createElement("label");
        let input=document.createElement("input");
        input.type="radio",
        input.value=key;
        input.name="priority-choice"
        label.innerText=key;
        label.appendChild(input)
        priorityForm.appendChild(label)
    }


    
    // append all elements to todo form

    todoForm.append(titleFormLabel,todoFormTitle,descriptionFormLabel,todoFormDescription,dateFormLabel,todoFormDate,priorityFormLabel,priorityForm,submitFormButton);


    //  append todo form to todos container

    todoFormContainer.append(todoFormHeader,todoForm);




    //  handles the popup of the form


    const addTodoButton=document.querySelector(`.main-container #${projectName} #add-todo-to-${projectName}`);
    const closeTodo=document.querySelector(`#${projectName}-close-button`);
    
    const overlay=document.querySelector("#overlay");
    const todoFormSelector=document.querySelector(`.main-container #${projectName} .todo-form-container`);

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
