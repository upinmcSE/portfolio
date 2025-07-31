import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Duong Trung Thanh</h1>
        <p className={styles.description}>
          I'm computer science student on my journey to becoming a Software Engineer.
        </p>
        <a href="mailto:thanhdt3019@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={`../../../assets/hero/heroImage.png`}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};