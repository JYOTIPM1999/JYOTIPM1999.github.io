import styles from "./skills.module.css";
export const Skills = () => {
  return (
    <>
      <h1 className={styles.head}>Skills and Tech</h1>
      <div id="SKILLS" className={styles.main}>
        <div className={styles.gif}>
          <img src="./Image/skills.gif" />
        </div>
        <div className={styles.skill}>
          <div>
            <img src="./Image/html5.png" alt="html5.png" />
          </div>
          <div>
            <img src="./Image/css3.png" alt="css3.png" />
          </div>
          <div>
            <img src="./Image/javascript.png" alt="javascript.png" />
          </div>
          <div>
            <img src="./Image/react-native.png" alt="react-native.png" />
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
        </div>
      </div>
    </>
  );
};
