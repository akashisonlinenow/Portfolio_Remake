import React from "react";
import Heading from "@components/heading/heading";
import styles from "./styles/Certificates.module.scss";
import Component from "@layout/componentTransition";

const Certificates = () => {
  return (
    <>
      <Heading title="Certificates" type="small" />
      <Component className={styles.container}>
        {"a b c d e f".split(" ").map((e) => {
          return (
            <React.Fragment key={e}>
              <div className={styles.card}>Coming Soon!</div>
            </React.Fragment>
          );
        })}
      </Component>
    </>
  );
};

export default Certificates;

// TODO: Change The Key
