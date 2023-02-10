import React from "react";

interface props {
  defaultStyles?: any;
}

const AboutData = (props: props) => {
  const styles = props.defaultStyles;

  return (
    <div>
      <span className={styles.greet}>Hello!</span>
      <br /> I am{" "}
      <span className={styles.name}>
        {process.env.fName} {process.env.lName}
      </span>{" "}
      from <span className={styles.country}>{process.env.location}</span>.
      <br /> An Aspiring Full-Stack Developer looking for Opportunities
      <br />
      Apart from Coding I have a wide range of interests:
      <ul className={styles.interests}>
        <li>Reading Books</li>
        <li>Watching Anime</li>
        <li>Playing Games</li>
      </ul>
      I prefer Typescript (The Autocomplete is Godsent)
      <br />I am always looking forward to New Technologies
    </div>
  );
};

export default AboutData;
