import React from "react";
import styles from "./styles/About.module.scss";

const AboutPage = () => {
  return (
    <>
      <div className={styles.container}>
        Dear visitors, I am Jayesh Singh from India. <br /> I am an Aspiring
        Full-Stack Developer looking for Opportunities <br />I have wide range
        of Intrests apart from Coding{" "}
        <ul>
          <li>Reading Books</li>
          <li>Watching Anime</li>
          <li>Playing Games</li>
        </ul>
        I prefer Typescript (For the Autocomplete), but I am always looking
        forward to New Technologies
      </div>
    </>
  );
};

export default AboutPage;
