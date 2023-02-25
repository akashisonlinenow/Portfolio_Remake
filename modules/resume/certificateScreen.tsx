import styles from "./styles/Certificates.module.scss";
import Heading from "@components/heading";
import Component from "@layout/componentTransition";
import { Fragment } from "react";

const Certificates = () => {
  return (
    <>
      <Heading title="Certificates" type="small" />
      <Component className={styles.container}>
        {"a b c d e f".split(" ").map((e) => {
          return (
            <Fragment key={e}>
              <div className={styles.card}>Coming Soon!</div>
            </Fragment>
          );
        })}
      </Component>
    </>
  );
};

export default Certificates;

// TODO: Change The Key
