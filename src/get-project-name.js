const getProjectName= () => {
    
    let projectName;
    projectName=prompt("Name of the project : ")
    while(projectName===null) {
        projectName=prompt("Project name cant be empty ")
    }
    
        return(projectName);
    
    
    
};

export {getProjectName};