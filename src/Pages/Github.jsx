import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHub = () => {
  const github = {
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div className={"#github"}>
      <h1
        style={{
          color: "#fecd45",
          textAlign: "center",
          textDecorationLine: "underline",
          textDecorationStyle: "double",
        }}
      >
        Github Calender & Stats
      </h1>
      <div w={["100%", "100%", "65%"]} style={github}>
        <GitHubCalendar
          style={{ margin: "auto", color: "white" }}
          username="JYOTIPM1999"
          year={new Date().getFullYear()}
        />
      </div>
    </div>
  );
};

export default GitHub;
