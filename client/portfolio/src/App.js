import logo from "./logo.svg";
import "./App.css";
import { Hi } from "./components/Intro1/intro";
import { Contact } from "./components/contact/contact";
import { Myself } from "./components/MySelf/myself";
import { Projects } from "./components/Projects/projects";
import auth from "./components/Images/2factor.jpg";
import weather from "./components/Images/weather app.jpg";
import bot from "./components/Images/chatbot.jpg";

const images = [
  { image: auth, name: "2factor auth" },
  { image: weather, name: "weather App" },
  { image: bot, name: "Chatbot" },
];
function App() {
  return (
    <div className="App">
      <Hi />
      <Myself />
      <span
        className="title"
        style={{ display: "flex", flexWrap: "wrap", margin: "auto" }}>
        <h1>My Projects</h1>
      </span>
      <div className="all-images">
        {images.map((val) => (
          <Projects item={val} />
        ))}
      </div>

      <span
        className="title"
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
          marginTop: "7rem",
        }}>
        <h1>Contact Me</h1>
      </span>
      <Contact />
    </div>
  );
}

export default App;
