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
      <div className="background-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FF2E63"
            fill-opacity="1"
            d="M0,128L30,133.3C60,139,120,149,180,154.7C240,160,300,160,360,144C420,128,480,96,540,90.7C600,85,660,107,720,122.7C780,139,840,149,900,165.3C960,181,1020,203,1080,197.3C1140,192,1200,160,1260,165.3C1320,171,1380,213,1410,234.7L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>

      <br />
      <div className="resume">
        <a href="./Jyoti_Prakash_Mohapatra_Resume.pdf" download>
          <button className="resumeBtn">
            Resume
            <TbFileDownload style={{ marginLeft: "5px" }} />
          </button>
        </a>
      </div>
      <Homepage />
      {/* <div className="background-svg">
        <div class="custom-shape-divider-top-1713066846">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div> */}
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
      <p style={{ textAlign: "center", color: "#05386b" }}>
        Designed by - Jyoti Prakash Mohapatra | jyotipm1999@gmail.com | All
        rights reserved, 2024
      </p>
    </div>
  );
}

export default App;
