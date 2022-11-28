import React from "react";
import styles from "./Github.module.css";
import GitHubCalendar from "react-github-calendar";

const GitHub = () => {
  return (
    <>
      <h1 className={styles.h1Tag}>Github Calender & Stats</h1>
      <div id="STATS" style={{ backgroundColor: "#05386b", padding: "5%" }}>
        <div w={["100%", "100%", "65%"]} className={styles.mainDiv}>
          <GitHubCalendar
            style={{ margin: "auto" }}
            username="JYOTIPM1999"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </>
  );
};

export default GitHub;
