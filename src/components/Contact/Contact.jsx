import React from "react";
import styles from "./Contact.module.css";
import linkedin from "/assets/contact/linkedinIcon.png"
import github from "/assets/contact/githubIcon.png"
import mail from "/assets/contact/emailIcon.png"


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={mail} alt="Email icon" />
          <a href="mailto:thanhdt3019@email.com">thanhdt3019@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/upinmcse/" target="_blank" rel="noopener noreferrer">linkedin.com/upinmcse</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/upinmcSE" target="_blank" rel="noopener noreferrer">github.com/upinmcSE</a>
        </li>
      </ul>
    </footer>
  );
};