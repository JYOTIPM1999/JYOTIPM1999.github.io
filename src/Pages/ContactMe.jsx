import styles from "./Contactme.module.css";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
// import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { FiYoutube } from "react-icons/fi";
import emailjs from "emailjs-com";

export const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r05t5qq",
        "template_svq7v3l",
        e.target,
        "nIYh6dRVCbn8uecVh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h1 className={styles.head}>Get in touch</h1>
      <div id="CONTACT" className={styles.mainDiv}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img
            src="https://res.cloudinary.com/mytestlogo/image/upload/bitpodsite/images/comp-1.gif"
            // style={{ height: "35%", width: "35%" }}
            className={styles.imgTag}
          />
          <div>
            <form
              id="contact-form"
              onSubmit={sendEmail}
              className={styles.formtag}
            >
              <label className={styles.name}>Name</label>
              <input type="text" name="user_name" />
              <label className={styles.name}>Email</label>
              <input type="email" name="user_email" />
              <label className={styles.name}>Message</label>
              <textarea name="message" style={{ height: "250px" }}></textarea>
              <br />
              <input
                type="submit"
                value="Send"
                className={styles.inputSubmit}
              />
            </form>
          </div>
        </div>

        <div className={styles.atag}>
          <a href="https://github.com/JYOTIPM1999" target="_blank">
            <FaGithub className={styles.github} />
          </a>
          <a
            href="https://www.linkedin.com/in/jyoti-prakash-mohapatra-8550a61a5"
            target="_blank"
          >
            <BsLinkedin className={styles.linkedin} />
          </a>

          <a
            href="https://www.youtube.com/channel/UCDFhJrpwkcPyIJbuD_YPM8g"
            target="_blank"
          >
            <FiYoutube className={styles.youtube} />
          </a>
        </div>
        <div
          className={styles.phnDiv}
          style={{
            display: "flex",
            color: "#05386b",
            justifyContent: "center",
            gap: "20px",
            fontFamily: "",
          }}
        >
          <p>Contact Number- +91 93378 41077</p>
          <p>Email- jyotipm1999@gmail.com</p>
        </div>
      </div>
    </>
  );
};
