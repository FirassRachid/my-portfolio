import React from "react";
import CSS from "../../assets/css3.svg";
import JS from "../../assets/javascript.svg";
import ReactJS from "../../assets/react.svg";
import HTML from "../../assets/html.svg";
import Git from "../../assets/github.svg";
import TS from "../../assets/typescript.svg";
import "./Skills.css";
function Skills() {
  const SkillsData = [
    {
      id: 1,
      image: HTML,
      title: "HTML",
      disc: "Structure",
      reatio: "90%",
    },
    {
      id: 2,
      image: CSS,
      title: "CSS",
      disc: "User Interface",
      reatio: "90%",
    },
    {
      id: 3,
      image: JS,
      title: "JavaScript",
      disc: "Interaction",
      reatio: "60%",
    },
    {
      id: 4,
      image: TS,
      title: "TypeScript",
      disc: "Enhanced JavaScript",
      reatio: "40%",
    },
    {
      id: 5,
      image: Git,
      title: "Git",
      disc: "Version Control",
      reatio: "70%",
    },
    {
      id: 6,
      image: ReactJS,
      title: "ReactJS",
      disc: "Framework",
      reatio: "80%",
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
