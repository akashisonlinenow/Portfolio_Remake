import React from "react";
import styles from "@styles/Heading.module.scss";
import Component from "/common/layout/componentTransition";

type inputProps = {
  title: string;
};

const Heading: React.FC<inputProps> = (props) => {
  const title = props.title;

  return <Component className={styles.container}>#{title}</Component>;
};

export default Heading;
