import React from "react";
import stat from "./GithubStats.module.css";
export const GithubStats = () => {
  return (
    <div className={stat.parent}>
      <div className={stat.first}>
        <a href="https://github.com/jyotipm1999">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=jyotipm1999"
            alt="*"
          />
        </a>
      </div>

      <div className={stat.second}>
        <a href="https://github.com/jyotipm1999">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=jyotipm1999"
            alt="#"
          />
        </a>

        <a href="https://github.com/jyotipm1999" style={{ marginTop: "40px" }}>
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=jyotipm1999&count_private=true&show_icons=true"
            alt="#"
          />
        </a>
      </div>
    </div>
  );
};
