import closeImg from './img/window-close.svg';


const CreateProject= (name) => {
    const projectSidebar=document.querySelector(".projects");
    const mainContainer=document.querySelector(".main-container");

    
    if(name==null) {
        
    }
    else {
        const projectDivSidebar=document.createElement("div");
        projectDivSidebar.className=`${name}`;
        
        const projectSelector=document.createElement("button");
        
        projectSelector.id=`${name}`;            // to be chosen by user
        projectSelector.textContent=`${name}`;      // to be chosen by user
        const closeButton=document.createElement("img");
        closeButton.src=closeImg;
        projectDivSidebar.append(projectSelector,closeButton);
        projectSidebar.appendChild(projectDivSidebar);
        
        const projectContainer=document.createElement("div");
        projectContainer.className=name;
        
        const todoContainer=document.createElement("div");
        todoContainer.className=`todo-${name}`;

        projectContainer.append(todoContainer);
        mainContainer.appendChild(projectContainer);
        return(name);
        
    }
    
};




export {CreateProject};