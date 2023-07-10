import React from "react";
import "./styles2.css";

export const MySkills = (props) => {
  return (
    <div className="mySkills">
      <div className="skills area">
        <span
          style={{ color: "blue", wordBreak: "break-word", overflow: "auto" }}>
          Area
        </span>
        <span style={{ wordBreak: "break-word", overflow: "auto" }}>
          {props.item.area}
        </span>
      </div>
      <div className="skills languages">
        <span
          style={{ color: "blue", wordBreak: "break-word", overflow: "auto" }}>
          Languages:{" "}
        </span>
        <span style={{ wordBreak: "break-word", overflow: "auto" }}>
          {props.item.languages.join(", ")}
        </span>
      </div>
      <div className="skills frameworks">
        <span
          style={{ color: "blue", wordBreak: "break-word", overflow: "auto" }}>
          Frameworks:{" "}
        </span>
        <span style={{ wordBreak: "break-word", overflow: "auto" }}>
          {props.item.frameworks.join(", ")}
        </span>
      </div>
      {props.item.database.length > 0 && (
        <div className="skills database">
          <span
            style={{
              color: "blue",
              wordBreak: "break-word",
              overflow: "auto",
            }}>
            Databases:{" "}
          </span>
          <span
            style={{
              wordBreak: "break-word",
              overflow: "auto",
            }}>
            {props.item.database.join(", ")}
          </span>
        </div>
      )}
    </div>
  );
};
