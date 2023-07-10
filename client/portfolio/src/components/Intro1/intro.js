import React, { useState, useEffect } from "react";
import "./intro.css";

export const Hi = () => {
  const [hi, setHi] = useState("");
  const [name, setName] = useState("");
  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setHi("Hi");
    }, 500);

    const timeout2 = setTimeout(() => {
      setName("This is Aayush");
    }, 1300);

    const timeout3 = setTimeout(() => {
      setWelcome("Welcome to my Portfolio");
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div className="greet-visitors">
      <span className="greet-hi">
        <h1>{hi}</h1>
      </span>
      <span className="greet-name">
        <h2>{name}</h2>
      </span>
      <span className="greet-welcome">
        <h3>{welcome}</h3>
      </span>
    </div>
  );
};
