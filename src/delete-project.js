const deleteProject = () => {
    const SidebarProjectsContainer = document.querySelectorAll(".projects > div > img");


   
    SidebarProjectsContainer.forEach((elem) => {
        elem.addEventListener("click", () => {
            const projectClassName = elem.parentNode.className;
            console.log(`Attempting to delete project: ${projectClassName}`);

            const projectContainer = document.querySelector(`.main-container .${projectClassName}`);
            console.log(projectContainer);

            if (projectContainer) {
                projectContainer.remove();
                console.log(`Removed project container: ${projectClassName}`);
            } else {
                console.warn(`Project container for ${projectClassName} not found.`);
            }

            elem.parentNode.remove();
            console.log(`Removed sidebar element: ${projectClassName}`);
        });
    });
};

export { deleteProject };
