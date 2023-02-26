import type { FC } from "react";
import type { AboutProps } from "types/DataTypes";

const AboutData: FC<AboutProps> = (props) => {
  const styles = props.defaultStyles;

  return (
    <div>
      <span className={styles.greet}>Hello!</span>
      <br /> I am{" "}
      <span className={styles.name}>
        {process.env.FIRST_NAME || "Jayesh"} {process.env.LAST_NAME || "Singh"}
      </span>{" "}
      from{" "}
      <span className={styles.country}>{process.env.LOCATION || "India"}</span>.
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

// TODO : Give type to Default Types
