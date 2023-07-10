import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <>
      <div className="contact-info">
        <span className="contact-linkeden">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/aayush-thapaliya-154018252/"
              )
            }
          />
        </span>
        <span className="contact-github">
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://github.com/aayush6200")}
          />
        </span>
        <span className="contact-instagram">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://github.com/aayush6200")}
          />
        </span>
      </div>
    </>
  );
};
