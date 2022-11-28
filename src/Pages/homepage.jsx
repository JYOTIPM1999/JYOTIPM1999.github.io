import styles from "./Homepage.module.css";
export const Homepage = () => {
  return (
    <div id="Homepage" className={styles.main}>
      <div className={styles.imageDiv}>
        <img src="./Image/self.png" className={styles.image} alt="img" />
      </div>
      <div>
        <h1 className={styles.name}>
          <span style={{ color: "#05386b" }}>Hello,😀</span>
          <br />I am Jyoti Prakash Mohapatra
        </h1>
        <br />
        <p className={styles.para}>
          <span style={{ color: "#5cdb95" }}>Hello strangers!</span> 👋, my name
          is Jyoti Prakash Mohapatra and I am a MERN Stack Developer, passionate
          about building digital products that improve everyday experience for
          people. I love to work on exciting projects that test what I've
          learnt, whilst being exposed to the power and potential of the
          ever-evolving technologies around us. I'm always looking for better,
          and more importantly, ethical and accessible ways to solve the common
          problems we are faced with day-to-day life.
          {/* <img src="./Image/about.gif" alt="img" /> */}
        </p>
      </div>
    </div>
  );
};
