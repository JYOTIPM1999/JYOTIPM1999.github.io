import styles from "./skills.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Skills = () => {
  useEffect(() => {
    AOS.init({ delay: 500 });
  }, []);

  return (
    <>
      <h1 className={styles.head}>Skills and Tech</h1>
      {/* <div className="background-svg">
        <div class="custom-shape-divider-bottom-1713068854">
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
      <div id="SKILLS" className={styles.main}>
        <div className={styles.gif}>
          <img src="./Image/skills2.gif" />
        </div>
        <div className={styles.skill}>
          <div>
            <img src="./Image/expo.png" alt="expo.png" />
          </div>

          <div>
            <img src="./Image/mobile.png" alt="mobile.png" />
          </div>
          <div>
            <img src="./Image/react-native.png" alt="react-native.png" />
          </div>
          <div>
            <img src="./Image/react-native2.png" alt="react-native2.png" />
          </div>
          <div>
            <img src="./Image/mysql.png" alt="mysql.png" />
          </div>
          <div>
            <img src="./Image/typescript.webp" alt="typescript.webp" />
          </div>

          <div>
            <img src="./Image/javascript.png" alt="javascript.png" />
          </div>
          <div>
            <img src="./Image/redux.png" alt="redux.png" />
          </div>
          <div>
            <img src="./Image/nodejs.png" alt="nodejs.png" />
          </div>
          <div>
            <img src="./Image/expressjs.png" alt="expressjs.png" />
          </div>
          <div>
            <img src="./Image/mongo.png" alt="mongo.png" />
          </div>
          <div>
            <img src="./Image/github.png" alt="github.png" />
          </div>
          <div>
            <img src="./Image/DSA2.png" alt="DSA2.png" />
          </div>
          <div>
            <img src="./Image/npm.png" alt="npm.png" />
          </div>
          <div>
            <img src="./Image/git.png" alt="git.png" />
          </div>
          <div>
            <img src="./Image/html5.png" alt="html5.png" />
          </div>
          <div>
            <img src="./Image/css3.png" alt="css3.png" />
          </div>
        </div>
      </div>
    </>
  );
};
