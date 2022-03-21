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

  //This function will handle onclick event for ExperienceBlock. This function updates the "Current" of the Experiences to the experience that is just clicked so that the experience form displays the details of the experience that has been clicked.
  const handleOnClickExperienceBlock = (Index) => {
    // The below code is a better way of implementation... but for some reason ChangePage() is not working as expected
    // console.log(appState.CurrentPage);
    // ChangePage("Experiences");
    // console.log(appState.CurrentPage);
    // SetSection("Experiences", { ...appState.Resume.Experiences, Current: Index });
    setAppState({
      ...appState,
      CurrentPage: "Experiences",
      Resume: {
        ...appState.Resume,
        Experiences: { ...appState.Resume.Experiences, Current: Index },
      },
    });
  };

  // This function is used to delete the experience from the experience List
  const handleOnClickExperienceDelete = (Index) => {
    SetSection("Experiences", {
      ...appState.Resume.Experiences,
      List: appState.Resume.Experiences.List.splice(Index, 1),
    });
  };
  //This function will handle onclick event for ExperienceBlock. This function updates the "Current" of the Experiences to the experience that is just clicked so that the experience form displays the details of the experience that has been clicked.
  const handleOnClickAwardsBlock = (Index) => {
    // The below code is a better way of implementation... but for some reason ChangePage() is not working as expected
    // ChangePage("Experiences");
    // SetSection("Experiences", { ...appState.Resume.Experiences, Current: Index });
    setAppState({
      ...appState,
      CurrentPage: "Awards",
      Resume: {
        ...appState.Resume,
        Awards: { ...appState.Resume.Awards, Current: Index },
      },
    });
  };

  // This function is used to delete the experience from the experience List
  const handleOnClickAwardsDelete = (Index) => {
    SetSection("Awards", {
      ...appState.Resume.Awards,
      List: appState.Resume.Awards.List.splice(Index, 1),
    });
  };

  //This function will handle onclick event for ProjectBlock. This function updates the "Current" of the Projects to the project that is just clicked so that the projects form displays the details of the project that has been clicked.
  const handleOnClickProjectBlock = (Index) => {
    // The below code is a better way of implementation... but for some reason ChangePage() is not working as expected
    // ChangePage("Projects");
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
  // This function is used to delete the experience from the experience List
  const handleOnClickProjectDelete = (Index) => {
    SetSection("Projects", {
      ...appState.Resume.Projects,
      List: appState.Resume.Projects.List.splice(Index, 1),
    });
  };

  //This function will handle onclick event for EducationBlock. This function updates the "Current" of the Educations to the education that is just clicked so that the educations form displays the details of the education that has been clicked.
  const handleOnClickEducationBlock = (Index) => {
    // The below code is a better way of implementation... but for some reason ChangePage() is not working as expected
    // ChangePage("Educations");
    // SetSection("Educations", { ...appState.Resume.Projects, Current: Index });
    setAppState({
      ...appState,
      CurrentPage: "Educations",
      Resume: {
        ...appState.Resume,
        Educations: { ...appState.Resume.Educations, Current: Index },
      },
    });
  };
  // This function is used to delete the experience from the experience List
  const handleOnClickEducationDelete = (Index) => {
    SetSection("Educations", {
      ...appState.Resume.Educations,
      List: appState.Resume.Educations.List.splice(Index, 1),
    });
  };

  // Listable Blocks----------------------------------------------------------------------------

  const ExperienceBlock = ({
    Title,
    Type,
    Employer,
    EmployerURL,
    StartDate,
    EndDate,
    Location,
    TechStack,
    ExperienceSummary,
    GitHubURL,
    DeployedURL,
    Index,
  }) => {
    return (
      <div
        className="experience"
        onClick={() => {
          handleOnClickExperienceBlock(Index);
        }}
      >
        <p
          className="experience-delete"
          onClick={() => {
            handleOnClickExperienceDelete(Index);
          }}
        >
          Delete
        </p>
        <p className="experience-title">{Title}</p>
        <p className="experience-subtitle">
          <span className="experience-subtitle-start-date">[ {StartDate} </span>
          <span>to</span>
          <span className="experience-subtitle-end-date"> {EndDate} ],</span>
          <span className="experience-subtitle-type">{Type}</span>
        </p>
        <p className="experience-employer">
          {/* If the user provide the EmployerUrl then the Employe will act as a Link button else if the user does not provide the url the Employer will act as a normal text */}
          {EmployerURL !== "" ? (
            <a href={EmployerURL} target="_blank" rel="noopener noreferrer">
              {Employer}
            </a>
          ) : (
            <span>{Employer}</span>
          )}
          <span>, {Location}</span>
        </p>

        <p className="experience-techstack">{TechStack}</p>
        <p>{ExperienceSummary}</p>
        {/* Github url is optional if the user does not enter any github url then we are not going to display the github link button  */}
        {GitHubURL !== "" ? (
          <a
            className="experience-link experience-link-github"
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
            className="experience-link experience-link-deplyedurl"
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

  const AwardsBlock = ({ Index, AwardSummary, CertificateLink }) => {
    return (
      <div
        className="award"
        onClick={() => {
          handleOnClickAwardsBlock(Index);
        }}
      >
        <p
          className="award-delete"
          onClick={() => {
            handleOnClickAwardsDelete(Index);
          }}
        >
          Delete
        </p>
        <p className="award-desc">{AwardSummary}</p>
        {CertificateLink !== "" ? (
          <strong>
            <a href={CertificateLink} target="_blank" rel="noopener noreferrer">
              Certificate Link
            </a>
          </strong>
        ) : (
          <></>
        )}
      </div>
    );
  };

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
        className="project"
        onClick={() => {
          handleOnClickProjectBlock(Index);
        }}
      >
        <p
          className="project-delete"
          onClick={() => {
            handleOnClickProjectDelete(Index);
          }}
        >
          Delete
        </p>

        <p className="project-title">{Title}</p>
        <p className="project-techstack">{TechStack}</p>
        <p className="project-summary">{ProjectSummary}</p>
        {/* Github url is optional if the user does not enter any github url then we are not going to display the github link button  */}
        {GitHubURL !== "" ? (
          <a
            className="project-link project-link-github"
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
            className="project-link project-link-deployedurl"
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

  const EducationBlock = ({
    Qualification,
    Institute,
    Score,
    StartDate,
    EndDate,
    Index,
  }) => {
    return (
      <div
        className="education"
        onClick={() => {
          handleOnClickEducationBlock(Index);
        }}
      >
        <p
          className="education-delete"
          onClick={() => {
            handleOnClickEducationDelete(Index);
          }}
        >
          Delete
        </p>
        <p className="education-qualification">{Qualification}</p>
        <p className="education-institute">{Institute}</p>
        <p className="education-subtitle">
          <span className="education-subtitle-start-date">[ {StartDate} </span>
          <span>to</span>
          <span className="education-subtitle-end-date"> {EndDate} ],</span>
        </p>
        <p className="education-score">Score : {Score}</p>
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
      {/* Skills Section ------------------------------------------------------ */}
      {/* If there is no skills then we should not display the "Skills" heading in the resume */}
      {Resume.Skills.TechnicalSkills !== "" ||
      Resume.Skills.SoftSkills !== "" ? (
        <>
          <hr />
          <h3>
            <strong>SKILLS</strong>
          </h3>
        </>
      ) : (
        <></>
      )}
      <div className="skills">
        <p className="skills-tech">{Resume.Skills.TechnicalSkills}</p>
        <p className="skills-tech">{Resume.Skills.SoftSkills}</p>
      </div>

      {/* Experience Section ------------------------------------------------------ */}
      {/* If there is no experience then we should not display the "Experience" heading in the resume */}
      {Resume.Experiences.List.length > 0 ? (
        <>
          <hr />
          <h3>
            <strong>EXPERIENCES</strong>
          </h3>
        </>
      ) : (
        <></>
      )}

      {Resume.Experiences.List.map((experience, key) => {
        const {
          Title,
          Type,
          Employer,
          EmployerURL,
          StartDate,
          EndDate,
          Location,
          TechStack,
          ExperienceSummary,
          GitHubURL,
          DeployedURL,
        } = experience;
        return (
          <ExperienceBlock
            key={key}
            Title={Title}
            Type={Type}
            Employer={Employer}
            EmployerURL={EmployerURL}
            StartDate={StartDate}
            EndDate={EndDate}
            Location={Location}
            TechStack={TechStack}
            ExperienceSummary={ExperienceSummary}
            GitHubURL={GitHubURL}
            DeployedURL={DeployedURL}
            // This Index prop will help us to select the perticular experience block on click
            Index={key}
          />
        );
      })}

      {/* Awards Section ------------------------------------------------------ */}
      {/* If there is no award then we should not display the "Awards" heading in the resume */}
      {Resume.Awards.List.length > 0 ? (
        <>
          <hr />
          <h3>
            <strong>AWARDS</strong>
          </h3>
        </>
      ) : (
        <></>
      )}

      <ul>
        {Resume.Awards.List.map((award, key) => {
          const { AwardSummary, CertificateLink } = award;
          return (
            <li key={key}>
              <AwardsBlock
                AwardSummary={AwardSummary}
                CertificateLink={CertificateLink}
                // This Index prop will help us to select the perticular award block on click
                Index={key}
              />
            </li>
          );
        })}
      </ul>

      {/* Projects Section ------------------------------------------------------ */}
      {/* If there is no projects then we should not display the "Projects" heading in the resume */}
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
        const { Title, TechStack, ProjectSummary, GitHubURL, DeployedURL } =
          project;
        return (
          <ProjectBlock
            key={key}
            Title={Title}
            TechStack={TechStack}
            ProjectSummary={ProjectSummary}
            GitHubURL={GitHubURL}
            DeployedURL={DeployedURL}
            // This Index prop will help us to select the perticular project block on click
            Index={key}
          />
        );
      })}
      {/* Education Section ------------------------------------------------------ */}
      {/* If there is no education then we should not display the "Education" heading in the resume */}
      {Resume.Educations.List.length > 0 ? (
        <>
          <hr />
          <h3>
            <strong>EDUCATIONS</strong>
          </h3>
        </>
      ) : (
        <></>
      )}
      <ul>
        {Resume.Educations.List.map((education, key) => {
          const { Qualification, Institute, Score, StartDate, EndDate } =
            education;
          return (
            <li key={key}>
              <EducationBlock
                Qualification={Qualification}
                Institute={Institute}
                Score={Score}
                StartDate={StartDate}
                EndDate={EndDate}
                // This Index prop will help us to select the perticular education block on click
                Index={key}
              />
            </li>
          );
        })}
      </ul>

      {/* Hobbies Section ------------------------------------------------------ */}
      {/* If there is no hobbie then we should not display the "Hobbies" heading in the resume */}
      {Resume.Hobbies.Hobbies !== "" ? (
        <>
          <hr />
          <h3>
            <strong>HOBBIES</strong>
          </h3>
        </>
      ) : (
        <></>
      )}
      <p className="hobbies">{Resume.Hobbies.Hobbies}</p>
    </div>
  );
};

export default Rezume;
