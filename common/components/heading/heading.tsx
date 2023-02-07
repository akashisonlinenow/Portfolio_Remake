import React from "react";
import styles from "@styles/Heading.module.scss";
import Component from "@layout/componentTransition";

type inputProps = {
  title: string;
  style?: "default" | "small";
};

const Heading: React.FC<inputProps> = (props) => {
  const title = props.title;
  const style = props.style;

  return (
    <Component
      className={styles.container}
      style={
        style === "small"
          ? { fontSize: "clamp(2.5rem, 4vw, 5.5rem)" }
          : undefined
      }
    >
      #{title}
    </Component>
  );
};

export default Heading;
