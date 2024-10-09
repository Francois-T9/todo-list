const DisplayProjectName=() => {
    const headerTitle=document.querySelector(".header h1");
    const projectsContainer=document.querySelectorAll(".projects button")
    const mainContainerTitle=document.querySelector(".project-presentation p");
    
    const containerTitleText=document.createElement("h2");
    

   
    
    projectsContainer.forEach((elem) => {
        elem.addEventListener("click",() => {
            containerTitleText.textContent=`You are currently working on ${elem.id} project` // add the project name as a function of project id
            
            
    
            headerTitle.textContent=`Project : ${elem.id}`;
            mainContainerTitle.textContent=`You are currently working on project : ${elem.id}`;
            
            
        }
            
        )
        
    })
}

export  { DisplayProjectName} ;