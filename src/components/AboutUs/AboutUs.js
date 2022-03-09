import React from "react";
import { Link } from "react-router-dom";

const mentors = [
  {
    name: "Praveen Kumar Purushothaman",
    gitProfileImage: "https://avatars.githubusercontent.com/u/1830380?v=4",
    githubProfile: "https://github.com/praveenscience",
    twitterProfile: "https://twitter.com/praveenscience",
  },
  {
    name: "Priyadharshini Rajaram",
    gitProfileImage: "https://avatars.githubusercontent.com/u/44338847?v=4",
    githubProfile: "https://github.com/priyadharshinir1894",
    twitterProfile: "",
  },
  {
    name: "Khushboo Verma",
    gitProfileImage: "https://avatars.githubusercontent.com/u/43381712?v=4",
    githubProfile: "https://github.com/vermakhushboo",
    twitterProfile: "https://twitter.com/khushbooverma_",
  },
  {
    name: "PrathibhaS",
    gitProfileImage: "https://avatars.githubusercontent.com/u/28892981?v=4",
    githubProfile: "https://github.com/PrathibhaS",
    twitterProfile: "",
  },
  {
    name: "Anjali Sharma",
    gitProfileImage: "https://avatars.githubusercontent.com/u/52730168?v=4",
    githubProfile: "https://github.com/AnjaliSharma1234",
    twitterProfile: "",
  },
];

const ProfileCard = ({ profileImage, name, githubProfile, twitterProfile }) => {
  return (
    <div className="mentor-card">
      <img
        className="mentor-img"
        src={profileImage}
        alt={`${name} profile Image`}
      />
      <span>{name}</span>
      <div className="social-icons">
        <a
          href={githubProfile}
          class="fa fa-lg fa-github"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a
          href={twitterProfile}
          class="fa fa-lg fa-twitter"
          target={twitterProfile !== "" ? "_blank" : "_self"}
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div>
      <section className="about-banner text-center">
        <h1 className="about-banner-text">ABOUT US</h1>
        <p className="about-description">
          Rezume is a free online portal for generating resumes without worrying
          about the styling and formatting. In the web portal, you only need to
          input the basic information which you want to have on your resume and
          it will automatically generate a decent resume for you.
          <br />
          Rezume facilitate students and working professionals to create decent
          Resumes by focusing on the content rather than the styling and other
          UI features
        </p>
        <div className="about-banner-btn btn btn-primary btn-md ">
          <Link
            className="text-light text-decoration-none font-weight-bold"
            to="/"
          >
            Create Resume
          </Link>
        </div>
      </section>
      <section className="mentor-section text-center">
        <h2 className="mentor-section-title">PROJECT MENTORS</h2>
        <div className="mentor-list row justify-content-around">
          {mentors.map((mentor) => (
            <ProfileCard
              profileImage={mentor.gitProfileImage}
              name={mentor.name}
              githubProfile={mentor.githubProfile}
              twitterProfile={mentor.twitterProfile}
            />
          ))}
        </div>
      </section>
      <section className="girl-script-promotion-section">
        <img
          className="girl-script-logo"
          src="https://raw.githubusercontent.com/GirlScriptSummerOfCode/MentorshipProgram/master/GSsoc%20Type%20Logo%20Black.png"
          alt="GirlScript Summer of code Logo"
        />
        <p>
          This project is part of the GirlScript Summer of Code 2022 Open Source
          Program.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
