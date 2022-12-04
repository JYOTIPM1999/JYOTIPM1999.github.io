import styles from "./Homepage.module.css";
export const Homepage = () => {
  return (
    <div id="Homepage" className={styles.main}>
      <div style={{ border: "1px solid red", width: "50%" }}>
        <div className={styles.imageDiv}>
          <img src="./Image/self.png" className={styles.image} alt="img" />
        </div>
        <div>
          <h1 className={styles.name}>
            <span style={{ color: "#05386b" }}>Hello, 👋</span>
            <br />I am Jyoti Prakash Mohapatra
          </h1>
          <br />
          <p className={styles.para}>
            <span style={{ color: "#5cdb95" }}>Hello strangers!</span> 👋, my
            name is Jyoti Prakash Mohapatra and I am a MERN Stack Developer,
            passionate about building digital products that improve everyday
            experience for people. I love to work on exciting projects that test
            what I've learnt, whilst being exposed to the power and potential of
            the ever-evolving technologies around us. I'm always looking for
            better, and more importantly, ethical and accessible ways to solve
            the common problems we are faced with day_to_day life.
            {/* <img src="./Image/about.gif" alt="img" /> */}
          </p>
        </div>
      </div>
      <div style={{ border: "2px solid blue", width: "50%" }}>
        <img
          style={{ width: "70%", display: "block",mar }}
          src="https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-3315.jpg?w=740&t=st=1670171346~exp=1670171946~hmac=e59ba681ef6082f25b1964a3a3e98dbe83197663bbe6f6be491b36a10287c2fc"
        />
      </div>
    </div>
  );
};
