import type { FC } from "react";
import type { AboutProps } from "types/DataTypes";

const AboutData: FC<AboutProps> = ({ defaultStyles: styles }) => {
  return (
    <div>
      <span className={styles.greet}>Hello!</span>
      <br /> I am{" "}
      <span className={styles.name}>
        {process.env.NEXT_PUBLIC_FIRST_NAME || "Akash"}{" "}
        {process.env.NEXT_PUBLIC_LAST_NAME || "Shridharan"}
      </span>{" "}
      from{" "}
      <span className={styles.country}>
        {process.env.NEXT_PUBLIC_LOCATION || "India"}
      </span>
      .
      <br /> An Aspiring <b><i>Front-End Developer</i></b> and <b><i>Competitive Programmer</i></b> looking for Opportunities
      <br />
      Apart from Coding I have a wide range of interests in:
      <ul className={styles.interests}>
        <li>Reading Books</li>
        <li>Watching Movies</li>
        <li>Listening Music</li>
        <li>Playing Games</li>
      </ul>
      I am a coding enthusiast who love to solve DSA problems in C++ (Competitive Programmer) || 2⭐@Codechef || 5⭐in C++ @hackerrank || Newbie @Codeforces || Solved over 500+ DSA questions on various platforms.
      <br />I am always keen to learn New Technologies and explore new things daily... 
    </div>
  );
};

export default AboutData;
