const DisplayProjectName=(name) => {
    const headerTitle=document.querySelector(".header h1");
    const SidebarprojectsContainer=document.querySelectorAll(".projects button")
    // const mainContainerTitle=document.querySelector(".project-presentation p");
    
    
    
    
    SidebarprojectsContainer.forEach((elem) => {  //when the sidebar button of the project is click, DOM should be added to mainContainer
        elem.addEventListener("click",() => {
            document.querySelectorAll('.main-container > div').forEach(div => {
                div.style.display = 'none'; 
            });
            let projectMainContainer = document.querySelector(`.main-container .${elem.id}`);
           

            let containerTitleText = projectMainContainer.querySelector('h3');
            if (!containerTitleText) {
                containerTitleText = document.createElement("h3");
                projectMainContainer.appendChild(containerTitleText);
            }

           
            containerTitleText.textContent = `You are currently working on ${elem.id} project`;

            projectMainContainer.style.display = 'grid'; // Set display to 'grid' to show it
            
            headerTitle.textContent = `Project : ${elem.id}`;
            
        }
            
        )
        
    })
}

export  { DisplayProjectName} ;