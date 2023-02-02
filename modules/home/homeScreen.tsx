import React from "react";
import styles from "./styles/Home.module.scss";
import Typewritter from "./components/typewritter";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.splash}>{"<Hello World>"}</div>
      <div className={styles.greet}>
        <span>Jayesh</span> <span> Here!</span>
      </div>
      <div className={styles.writter}>
        <div>I&apos;m a </div>
        <Typewritter />
      </div>
    </div>
  );
};

export default HomePage;
