import React from "react";
import styles from "./Github.module.css";
import GitHubCalendar from "react-github-calendar";

const GitHub = () => {
  return (
    <>
      <h1 className={styles.h1Tag}>Github Calender & Stats</h1>
      <div
        style={{
          backgroundImage: "linear-gradient(to top left, #252a34, #FF2E63)",
        }}
      >
        <div id="STATS" style={{ padding: "5%" }}>
          <div w={["100%", "100%", "65%"]} className={styles.mainDiv}>
            <GitHubCalendar
              style={{ margin: "auto", color: "#EAEAEA" }}
              username="JYOTIPM1999"
              // year={new Date().getFullYear()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GitHub;
