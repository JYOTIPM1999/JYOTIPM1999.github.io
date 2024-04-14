import styles from "./Homepage.module.css";
export const Homepage = () => {
  return (
    <div id="Homepage" className={styles.main}>
      <div className={styles.imageDiv}>
        <img src="./Image/self3.jpg" className={styles.image} alt="img" />
      </div>
      <div>
        <h1 className={styles.name}>
          <span style={{ color: "#252A34" }}>Hello, 👋</span>
          <br />
          Jyoti Prakash Mohapatra here...
        </h1>
        <br />
        <p className={styles.para}>
          <span style={{ color: "#FF2E63" }}>Hello strangers!</span> 👋, This is
          Jyoti Prakash Mohapatra an experienced Full Stack Developer (MERN)
          with Proficiency in React Native (Mobile Development) offering 1 year
          of hands-on experience. Demonstrated expertise in designing and
          implementing innovative solutions across diverse projects. Possesses
          profound knowledge of DSA, consistently producing clean, reusable, and
          optimized code. Seeking an opportunity in a challenging work
          environment to further develop skills and deepen understanding of web
          development.
        </p>
      </div>
    </div>
  );
};
