import styles from "./Homepage.module.css";
export const Homepage = () => {
  return (
    <div id="Homepage" className={styles.main}>
      {/* <div
        style={{
          // borderRight: "10px solid #05386b",
          // borderLeft: "10px solid #05386b",
          borderRadius: "20%",
          width: "50%",
        }}
      > */}
      <div className={styles.imageDiv}>
        <img src="./Image/self.png" className={styles.image} alt="img" />
      </div>
      <div>
        <h1 className={styles.name}>
          <span style={{ color: "#05386b" }}>Hello, 👋</span>
          <br />
          Jyoti Prakash Mohapatra here...
        </h1>
        <br />
        <p className={styles.para}>
          <span style={{ color: "#D2691E" }}>Hello strangers!</span> 👋, This is
          Jyoti Prakash Mohapatra a MERN Stack Developer, passionate about
          building digital products that improve everyday experience for people.
          Love to work on exciting projects that test what I've learnt, whilst
          being exposed to the power and potential of the ever-evolving
          technologies around us. I'm always looking for better, and more
          importantly, ethical and accessible ways to solve the common problems
          we are faced with day_to_day life.
        </p>
      </div>
      {/* </div> */}
      {/* <div
        style={{
          // border: "2px solid blue",
          // borderLeft: "10px solid #05386b",
          // borderRight: "10px solid #05386b",
          borderRadius: "20%",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // textAlign: "center",
          // alignItems: "center",
        }}
      >
        <img
          style={{
            width: "70%",
            borderRadius: "20%",
          }}
          src="https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-3315.jpg?w=740&t=st=1670171346~exp=1670171946~hmac=e59ba681ef6082f25b1964a3a3e98dbe83197663bbe6f6be491b36a10287c2fc"
        />
      </div> */}
    </div>
  );
};
