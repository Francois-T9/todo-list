import closeImg from './img/window-close.svg';

const getProjectName= () => {
    
    let projectName;
    projectName=prompt("Name of the project : ")


    return(projectName);
    
    
};

const CreateProject= (name) => {
    const projectContainer=document.querySelector(".projects");

    if(name==null) {

    }
    else {
        const newProject=document.createElement("button");
        
        newProject.id=`${name}`;            // to be chosen by user
        newProject.textContent=`${name}`;      // to be chosen by user
        const closeButton=document.createElement("img");
        closeButton.src=closeImg;
        
        
        projectContainer.append(newProject,closeButton);
        return(name);

    }
};



export {CreateProject, getProjectName};