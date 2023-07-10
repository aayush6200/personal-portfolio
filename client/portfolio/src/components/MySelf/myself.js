import React from "react";
import "./styles.css";
import { MySkills } from "./myskills";

const skills = [
  {
    area: "Frontend",
    languages: ["HTML", "CSS", "JavaScript"],
    frameworks: ["ReactJS"],
    database: [],
  },
  {
    area: "Backend",
    languages: ["JavaScript", "Python", "SQL", "NOSQL"],
    frameworks: ["Django", "NodeJS", "ExpressJS"],
    database: ["MongoDB", "SQLite"],
  },
];

export const Myself = () => {
  return (
    <>
      <div className="myself">
        <span className="my-intro">
          <p>
            I am a Computer Science student based in Los Angeles, California.
            Currently pursuing a Bachelor's degree at the University of Texas at
            Arlington, with an expected graduation in 2027. I have a strong
            proficiency in programming languages such as Python, HTML/CSS,
            JavaScript, and C. I am experienced in utilizing frameworks like
            ReactJS, NodeJS, and Django. Some notable projects I have worked on
            include developing a full-stack chatbot with AI capabilities and
            implementing secure authentication using the MERN stack. Alongside
            my academic pursuits, I have also worked as a tutor, fostering a
            supportive learning environment, and gained valuable experience at
            an Amazon Delivery Station, refining my communication and
            problem-solving skills.
          </p>
        </span>
      </div>
      <div className="skills-items">
        {skills.map((val) => (
          <MySkills item={val} />
        ))}
      </div>
    </>
  );
};
