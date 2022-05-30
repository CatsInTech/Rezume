import React from "react";
import FormElement from "./_FormElement";

// Dummy Data to add new elements into the array ----------------------------------------------------
const dummyExperience = {
  Title: "New Experience Title",
  Type: "Ex: Internship or Full Time",
  Employer: "Ex: Organisation Name",
  EmployerURL: "Ex: https://www.companyURL.com",
  StartDate: "1 March, 2022",
  EndDate: "1 April, 2022",
  Location: "(Optional)Ex: London",
  TechStack: "Ex : JavaScript, Tensorflow.js",
  ExperienceSummary:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  GitHubURL: "(Optional) Ex:https://github.com/yourAccount/repo",
  DeployedURL: "(Optional) Ex:https://project.com",
};
const dummyAward = {
  AwardSummary: "I have won so and so prize in so and so competition",
  CertificateLink: "(optional) Ex:https://certificateLink",
};
const dummyProject = {
  Title: "New Project Title",
  TechStack: "Ex : JavaScript, Tensorflow.js",
  ProjectSummary:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  GitHubURL: "(Optional) Ex:https://github.com/yourAccount/repo",
  DeployedURL: "(Optional) Ex:https://project.com",
};
const dummyEducation = {
  Qualification:
    "Ex : Bachelor of Technology in Computer Science and Engineering",
  Institute: "Ex : XYZ University, Delhi",
  Score: "Ex: 9.5cgpa or 95%",
  StartDate: "Ex : 1 March, 2022",
  EndDate: "Ex : 1 April, 2022",
};

// ---------------------------------------------------------------------------------------------------

// The input form of the pages that have an array / List of elements is rendered differently than the one whitout a array. This function is used to check wheather the currentPage has a array or not. In App.js we can see that the About, Skills, Hobbies, Contact don't have any array/ List whereas Projects, Experience, Education and Awards have a List
const isPageWithoutArray = (CurrentPage) => {
  return (
    CurrentPage === "About" ||
    CurrentPage === "Skills" ||
    CurrentPage === "Hobbies" ||
    CurrentPage === "Contact"
  );
};

const Forms = ({
  CurrentPage,
  SetSection,
  Resume,
  SetSwitch,
  ImageHandler,
}) => {
  // This function is used to add new Item to the List ----------------------------------------
  const addItem = (CurrPage) => {
    if (CurrPage === "Projects") {
      addItemToProject();
    } else if (CurrPage === "Experiences") {
      addItemToExperiences();
    } else if (CurrPage === "Awards") {
      addItemToAwards();
    } else if (CurrPage === "Educations") {
      addItemToEducations();
    }
  };
  const addItemToProject = () => {
    var newList = [...Resume["Projects"].List, dummyProject];
    const newItemIndex = newList.length - 1;
    SetSection("Projects", {
      Current: newItemIndex,
      List: newList,
    });
  };
  const addItemToExperiences = () => {
    var newList = [...Resume["Experiences"].List, dummyExperience];
    const newItemIndex = newList.length - 1;
    SetSection("Experiences", {
      Current: newItemIndex,
      List: newList,
    });
  };
  const addItemToAwards = () => {
    var newList = [...Resume["Awards"].List, dummyAward];
    const newItemIndex = newList.length - 1;
    SetSection("Awards", {
      Current: newItemIndex,
      List: newList,
    });
  };
  const addItemToEducations = () => {
    var newList = [...Resume["Educations"].List, dummyEducation];
    const newItemIndex = newList.length - 1;
    SetSection("Educations", {
      Current: newItemIndex,
      List: newList,
    });
  };
  // ----------------------------------------------------------------------------------------------

  return (
    <div className="rezume-forms">
      {/* This button is to add new items in the array. So we only need to display it for the pages that contain an array / List */}
      {isPageWithoutArray(CurrentPage) ? (
        <></>
      ) : (
        <p
          className="add-btn btn btn-primary btn-md"
          onClick={() => addItem(CurrentPage)}
        >
          Add new {CurrentPage}
        </p>
      )}
      {isPageWithoutArray(CurrentPage)
        ? Resume[CurrentPage] &&
          Object.keys(Resume[CurrentPage]).map((fe, key) => (
            <FormElement
              onSwitch={() => SetSwitch()}
              ImageHandler={(e) => ImageHandler(e)}
              key={key}
              Type={
                fe.includes("Summary")
                  ? "TextArea"
                  : fe === "ProfilePicture"
                  ? "Switch"
                  : "Text"
              }
              Label={fe}
              Value={Resume[CurrentPage][fe]}
              onChange={(e) =>
                SetSection(CurrentPage, {
                  ...Resume[CurrentPage],
                  [fe]: e.target.value,
                })
              }
            />
          ))
        : Resume[CurrentPage].List[Resume[CurrentPage].Current] &&
          Object.keys(
            Resume[CurrentPage].List[Resume[CurrentPage].Current]
          ).map((fe, key) => (
            <FormElement
              onSwitch={() => SetSwitch()}
              ImageHandler={(e) => ImageHandler(e)}
              key={key}
              Type={
                fe.includes("Summary")
                  ? "TextArea"
                  : fe === "ProfilePicture"
                  ? "Switch"
                  : "Text"
              }
              Label={fe}
              Value={Resume[CurrentPage].List[Resume[CurrentPage].Current][fe]}
              onChange={(e) =>
                SetSection(CurrentPage, {
                  ...Resume[CurrentPage],
                  List: Resume[CurrentPage].List.map((item, key) =>
                    key === Resume[CurrentPage].Current
                      ? {
                          ...Resume[CurrentPage].List[
                            Resume[CurrentPage].Current
                          ],
                          [fe]: e.target.value,
                        }
                      : item
                  ),
                })
              }
            />
          ))}
    </div>
  );
};

export default Forms;
