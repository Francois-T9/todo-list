const DisplayProjectName = (name) => {
  const UpdateHeaderTitle = (projectName) => {
    const headerTitle = document.querySelector(".header h1");
    headerTitle.textContent = `Project : ${projectName}`;
  };

  const UpdateMainContainerTitle = (projectName, projectContainer) => {
    let containerTitleText = projectContainer.querySelector("h3");

    if (!containerTitleText) {
      containerTitleText = document.createElement("h3");
      projectContainer.appendChild(containerTitleText);
    }

    containerTitleText.textContent = `You are currently working on ${projectName} project`;
  };

  const DisplayDefaultProject = (defaultProjectName) => {
    const defaultProjectContainer = document.querySelector(
      `.main-container #${defaultProjectName}`
    );
    defaultProjectContainer.style.display = "grid"; // Set display to 'grid' to show it
    defaultProjectContainer.style.visibility = "visible";

    UpdateMainContainerTitle(
      defaultProjectContainer.id,
      defaultProjectContainer
    );
    UpdateHeaderTitle(defaultProjectContainer.id);
  };

  // DisplayDefaultProject("Default");

  const HandleClickSidebarProject = (() => {
    const SidebarprojectsContainer = document.querySelectorAll(
      ".sidebar-projects button"
    );

    // display Default project when loading the page

    SidebarprojectsContainer.forEach((elem) => {
      //when the sidebar button of the project is click, DOM should be added to mainContainer
      elem.addEventListener("click", () => {
        document.querySelectorAll(".main-container .project").forEach((div) => {
          div.style.display = "none";
        });
        let projectMainContainer = document.querySelector(
          `.main-container #${elem.id}`
        );

        projectMainContainer.style.display = "grid"; // Set display to 'grid' to show it
        projectMainContainer.style.visibility = "visible";

        //function call

        UpdateMainContainerTitle(elem.id, projectMainContainer);
        UpdateHeaderTitle(elem.id);

        //
      });
    });
  })();

  return name;
};

export { DisplayProjectName };
