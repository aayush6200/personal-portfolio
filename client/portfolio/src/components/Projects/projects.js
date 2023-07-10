import React from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";

export const Projects = (props) => {
  return (
    <div className="projects">
      <div className="image-container">
        <img className="image" src={props.item.image} alt="Project" />
        <span className="image-name">{props.item.name}</span>
      </div>
      <Button className="custom-button">Click Here</Button>
    </div>
  );
};
