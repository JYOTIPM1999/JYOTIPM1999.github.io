import "./App.css";
import { ContactMe } from "./Pages/ContactMe";
import { Experience } from "./Pages/Experience";
import { Homepage } from "./Pages/homepage";
import { Navbar } from "./Pages/Navbar";
import { Projects } from "./Pages/Project";
import { Skills } from "./Pages/Skills";
import { TbFileDownload } from "react-icons/tb";
import GitHub from "./Pages/Github";
import { GithubStats } from "./Pages/GithubStats";

function App() {
  return (
    <div className="container">
      <Navbar />
      <br />
      <br />
      <div className="resume">
        <a href="./Resume.pdf" download>
          <button className="resumeBtn">
            Resume
            <TbFileDownload style={{ marginLeft: "5px" }} />
          </button>
        </a>
      </div>
      <Homepage />
      <br />
      <br />
      <br />
      <br />
      <Skills />
      <br />
      <br />
      <br />
      <br />
      <Experience />
      <br />
      <br />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <br />
      <br />
      <GitHub />
      <GithubStats />
      <br />
      <br />
      <br />
      <br />
      <ContactMe />
      <p style={{ textAlign: "center", color: "white" }}>
        Designed by - Jyoti Prakash Mohapatra | jyotipm1999@gmail.com | All
        rights reserved, 2022
      </p>
    </div>
  );
}

export default App;
