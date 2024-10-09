import closeImg from './img/window-close.svg';

const CreateDefault= () => {
    const projectContainer=document.querySelector(".projects");
    const defaultProjectContainer=document.createElement("button");
    defaultProjectContainer.id="default";
    defaultProjectContainer.textContent="Default"
    const closeButton=document.createElement("img");
    closeButton.src=closeImg;
    
    projectContainer.appendChild(defaultProjectContainer);
    projectContainer.appendChild(closeButton);

    return defaultProjectContainer.textContent;
    
};



// const DisplayProjectName=(name) => {
//     const containerTitle=document.querySelector(".project-presentation");
//     const headerTitle=document.querySelector(".header h1");
//     let headerText=headerTitle.textContent;
//     const defaultButton=document.querySelector("#default");
    
//     const containerTitleText=document.createElement("h2");
    
//     defaultButton.addEventListener("click",() => {
        
//         containerTitleText.textContent=`You are currently working on ${name} project` // add the project name as a function of project id
//         containerTitle.appendChild(containerTitleText);
        
        
//         headerText+=name;
//         headerTitle.textContent=headerText;
//     },{once:true});
    
// }
const DisplayProjectName=() => {
    const containerTitle=document.querySelector(".project-presentation");
    const headerTitle=document.querySelector(".header h1");
    let headerText=headerTitle.textContent;
    const defaultButton=document.querySelector("#default");
    
    const containerTitleText=document.createElement("h2");
    
    const projectsContainer=document.querySelectorAll(".projects button")

    console.log(projectsContainer)
    
    projectsContainer.forEach((elem) => {
        console.log(elem.id);
    })
}


export  {CreateDefault, DisplayProjectName} ;