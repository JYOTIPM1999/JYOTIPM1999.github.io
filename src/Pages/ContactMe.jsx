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
      <div id="CONTACT" className={styles.mainDiv}>
        <h1 className={styles.head}>Get in touch</h1>
        <form id="contact-form" onSubmit={sendEmail} className={styles.formtag}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" style={{ height: "80px" }}></textarea>
          <br />
          <input
            type="submit"
            value="Send"
            style={{
              backgroundColor: "#fecd45",
              padding: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          />
        </form>

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
      </div>
    </>
  );
};

{
  /* <h1 className={styles.head}>Get in touch</h1>
      <hr></hr>
      <div className={styles.atag}>
        <a
          href="https://www.linkedin.com/in/jyoti-prakash-mohapatra-8550a61a5/"
          target="_blank"
        >
          <FaGithub className={styles.github} />
        </a>
        <a href="https://github.com/JYOTIPM1999" target="_blank">
          <BsLinkedin className={styles.linkedin} />
        </a>

        <a
          href="https://www.youtube.com/channel/UCDFhJrpwkcPyIJbuD_YPM8g"
          target="_blank"
        >
          <FiYoutube className={styles.youtube} />
        </a>
      </div>
      <h3 style={{ textAlign: "center", color: "white" }}>
        Contact me on -9337841077 <BiPhoneCall />
      </h3> */
}
