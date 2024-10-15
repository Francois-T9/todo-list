import { displayTodo } from "./display-todo";

const formPopup=(name)  => {

    //global variables (avoid them if posible)

    let projectName=name;
    const todoFormContainer=document.querySelector(`.main-container #${projectName} #todo-form-project-${projectName}`);

    const todoFormSelector=document.querySelector(`.main-container #${projectName} .todo-form-container`);
    const overlay=document.querySelector("#overlay");


    // create todo object
    const createTodo=(name,description,date,priority) => 
    
    {return{name,description,date,priority};
        };

    // form header
    


    // create the header and the form content
    const PopulateFormContainer=(projectName) => {
            
            
        const CreateFormHeader=(() => {
                
                
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

            return todoFormHeader;

        })();

        
        const CreateTodoForm=(() => {
            
            const todoForm=document.createElement("form");
            todoForm.className=`todo-form`;
            todoForm.id=`${projectName}-todo-form`;
            todoForm.setAttribute("name","todoForm");
            
            return todoForm;
            
        })();
        
        //function calls
        const formHeader=CreateFormHeader;
        const todoForm=CreateTodoForm;



        return {formHeader,
            todoForm
        };
    };
    
    // function calls

    const todoFormHeader=PopulateFormContainer(name).formHeader;
    const todoForm=PopulateFormContainer(name).todoForm

    // checks if the required inputs of the form are empty or not
    const empty = () => {
        let form = document.querySelector(`#${projectName}-todo-form`);
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

            
    // adds all input to the form content + submit button (returns it in order to add event listener)

    const AddInputsToForm=(form) => {
        let projectName=form.id.split("-")[0];

        const submitFormButton=document.createElement("input");
        submitFormButton.setAttribute("type","submit");
        submitFormButton.id=`submit-todo-to-${projectName}`;
    
        //title
        const titleFormLabel=document.createElement("label");
        const todoFormTitle=document.createElement("input");
        todoFormTitle.minLength=3;
        todoFormTitle.required=true;
        todoFormTitle.id="todo-form-title";
        titleFormLabel.htmlFor="todo-form-title";
        titleFormLabel.textContent="Todo name";
        
        //descritpion (optional)
        const descriptionFormLabel=document.createElement("label");
        const todoFormDescription=document.createElement("input");
        todoFormDescription.id="todo-description";
        descriptionFormLabel.htmlFor="todo-description";
        descriptionFormLabel.textContent="Description";
    
        //date
        const dateFormLabel=document.createElement("label");
        const todoFormDate=document.createElement("input");
        todoFormDate.setAttribute("type","date");
        todoFormDate.required=true;
        todoFormDate.id="todo-due-date";
        dateFormLabel.htmlFor="todo-due-date";
        dateFormLabel.textContent="Due date";
    
     
        //priority
        

        const priorityFormLabel=document.createElement("label");
        priorityFormLabel.textContent="Priority";

        

        const todoFormPriority=document.createElement("input");
        todoFormPriority.setAttribute("type","text");
        todoFormPriority.setAttribute("list","priorities")
        todoFormPriority.required=true;
        todoFormPriority.id="todo-priority";
        
    
    
        
        // append all elements to todo form
    
        form.append(titleFormLabel,todoFormTitle,descriptionFormLabel,todoFormDescription,dateFormLabel,todoFormDate,priorityFormLabel,todoFormPriority,submitFormButton);
    
        
        //  append todo form to todos container
    
        todoFormContainer.append(todoFormHeader,form);
        return {todoFormTitle,
            todoFormDescription,
            todoFormDate,
            todoFormPriority,
            submitFormButton
            };

    }

    // function call
    const formOutput=AddInputsToForm(todoForm);

    //

    
    
    //  handles the popup of the form
    
    
    
    
    const PopTodoForm=(todoContainer) => {
        const addTodoButton=document.querySelector(`.main-container #${projectName} #add-todo-to-${projectName}`);
        
        addTodoButton.addEventListener("click",() =>{
            toggleAddTodo(todoContainer)  //should take the form class
            
        })
        
        function toggleAddTodo(todo) {
            if(todo==null) return
            todo.classList.add("active")
            overlay.classList.add('active');
        }
    };
    
    function removeTodoPopup(todo) {
        if(todo==null) return
        todo.classList.remove("active")
        overlay.classList.remove('active');
    }
    const DepopTodoForm=(todoContainer)=> {
        const closeTodo=document.querySelector(`#${projectName}-close-button`);
        closeTodo.addEventListener("click",() =>{
            removeTodoPopup(todoContainer)  //should take the form class
        }
    )
    
    //
    
    
    
    
    };

    const SubmitForm=(form) => {

    const submitFormButton=form.submitFormButton;
    

    submitFormButton.addEventListener("click",(event)=> {
        event.preventDefault();
        if (!empty()) {
            return; // Stop if the empty function returns false
        }
        
        let getTodo=createTodo(form.todoFormTitle.value,form.todoFormDescription.value,form.todoFormDate.value,form.todoFormPriority.value);
        
        displayTodo(projectName,getTodo);

        removeTodoPopup(todoFormSelector)  //should take the form class

        
       

    })
    };

//function call

PopTodoForm(todoFormSelector);
DepopTodoForm(todoFormSelector);
SubmitForm(formOutput);





};

export {formPopup};
