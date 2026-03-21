import React from "react";
import CSS from "../../assets/css3.svg";
import JS from "../../assets/javascript.svg";
import ReactJS from "../../assets/react.svg";
import HTML from "../../assets/html.svg";
import GitHUB from "../../assets/github.svg";
import TS from "../../assets/typescript.svg";
import SASS from "../../assets/sass.svg";
import Git from "../../assets/git.svg";
import "./Skills.css";
function Skills() {
  const SkillsData = [
    {
      id: 1,
      image: HTML,
      title: "HTML",
      disc: "HyperText Markup Language",
      reatio: "90%",
    },
    {
      id: 2,
      image: CSS,
      title: "CSS",
      disc: "Cascading Style Sheets",
      reatio: "90%",
    },
    {
      id: 3,
      image: JS,
      title: "JavaScript",
      disc: " interactive web pages",
      reatio: "60%",
    },
    {
      id: 4,
      image: Git,
      title: "Git",
      disc: "version control system",
      reatio: "70%",
    },
    {
      id: 5,
      image: GitHUB,
      title: "GitHub",
      disc: "proprietary developer platform",
      reatio: "70%",
    },
    {
      id: 6,
      image: ReactJS,
      title: "ReactJS",
      disc: "building user interfaces",
      reatio: "85%",
    },
    {
      id: 7,
      image: TS,
      title: "TypeScript",
      disc: "syntactic superset of JavaScript",
      reatio: "40%",
    },
    {
      id: 8,
      image: SASS,
      title: "SASS",
      disc: "CSS extension language",
      reatio: "50%",
    },
  ];

  return (
    <section className="skills" id="Skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {SkillsData.map(({ id, image, title, disc ,reatio }) => {
          return (
            <div key={id} className="skill-card">
              <img src={image} alt={title} />
              <div className="disc">
                <h3>{title} <small>{reatio}</small></h3>
                <p>{disc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
