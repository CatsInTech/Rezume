import React from "react";

const Rezume = ({
  CurrentPage,
  Resume,
  SetSection,
  appState,
  setAppState,
  ChangePage,
}) => {
  const { Name, Location, CurrentPosition, Summary } = Resume.About;
  const { Email, Website, Phone } = Resume.Contact;
  const NameArray = Name.split(" ");

  // onClickHandle Functions ----------------------------------------------------------------------------

  //This function will handle onclick event for ProjectBlock. This function updates the "Current" of the Projects to the project that is just clicked so that the projects form displays the details of the project that has been clicked.
  const handleOnClickProjectBlock = (Index) => {
    // The below code is a better way of implementation... but for some reason ChangePage() is not working as expected
    // console.log(appState.CurrentPage);
    // ChangePage("Projects");
    // console.log(appState.CurrentPage);
    // SetSection("Projects", { ...appState.Resume.Projects, Current: Index });
    setAppState({
      ...appState,
      CurrentPage: "Projects",
      Resume: {
        ...appState.Resume,
        Projects: { ...appState.Resume.Projects, Current: Index },
      },
    });
  };

  const handleOnClickProjectDelete = (Index) => {
    SetSection("Projects", {
      ...appState.Resume.Projects,
      List: appState.Resume.Projects.List.splice(Index, 1),
    });
  };

  // Listable Blocks----------------------------------------------------------------------------

  const ProjectBlock = ({
    Title,
    TechStack,
    ProjectSummary,
    GitHubURL,
    DeployedURL,
    Index,
  }) => {
    return (
      <div
        className="prj"
        onClick={() => {
          handleOnClickProjectBlock(Index);
        }}
      >
        <p
          className="prj-delete"
          onClick={() => {
            handleOnClickProjectDelete(Index);
          }}
        >
          Delete
        </p>

        <p className="prj-title">{Title}</p>
        <p className="prj-techstack">{TechStack}</p>
        <p className="prj-summary">{ProjectSummary}</p>
        {/* Github url is optional if the user does not enter any github url then we are not going to display the github link button  */}
        {GitHubURL !== "" ? (
          <a
            className="prj-link prj-link-github"
            href={GitHubURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        ) : (
          <></>
        )}
        {/* Deployed / project url is optional if the user does not enter any url then we are not going to display the project url button  */}
        {DeployedURL !== "" ? (
          <a
            className="prj-link prj-link-deplyedurl"
            href={DeployedURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Url
          </a>
        ) : (
          <></>
        )}
      </div>
    );
  };

  // -----------------------------------------------------------------------------

  return (
    <div className="rezume-rezume">
      <div className="rezume-rezume-contact">
        <p>
          Email:{" "}
          <strong>
            <a href={"mailto:" + Email}>{Email}</a>
          </strong>
        </p>
        <p>
          Website:{" "}
          <strong>
            <a
              href={"http://" + Website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Website}
            </a>
          </strong>
        </p>
        <p>
          Phone: <strong>{Phone}</strong>
        </p>
      </div>
      <h3>
        <span>{NameArray.shift()}</span> {NameArray.join(" ")}
      </h3>
      <p className="location">{Location}</p>
      <p className="summary">
        <strong className="position">{CurrentPosition}</strong>
        {Summary}
      </p>
      {/* Projects Section ------------------------------------------------------ */}
      {/* If there is no projects the we should not display the "Projects" heading in the resume */}
      {Resume.Projects.List.length > 0 ? (
        <>
          <hr />
          <h3>
            <strong>PROJECTS</strong>
          </h3>
        </>
      ) : (
        <></>
      )}

      {Resume.Projects.List.map((project, key) => {
        const {
          Title,
          TechStack,
          ProjectSummary,
          GitHubURL,
          DeployedURL,
        } = project;
        return (
          <ProjectBlock
            Title={Title}
            TechStack={TechStack}
            ProjectSummary={ProjectSummary}
            GitHubURL={GitHubURL}
            DeployedURL={DeployedURL}
            key={key}
            //
            Index={key}
          />
        );
      })}
    </div>
  );
};

export default Rezume;
