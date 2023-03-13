import styles from "../styles/TimelineComponent.module.scss";
import { Fragment } from "react";
import { useDataContext } from "@context/dataLayer";
import { motion, useWillChange } from "framer-motion";
import type { FC } from "react";
import type { MotionProps } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import type { TimelineInputProps } from "types/DataTypes";

const variants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 200 },
};

const nodeVariant: Variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const childVariant: Variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const childTransitions: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

const transition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  staggerChildren: 0.1,
};

const viewPort = { once: true, amount: 0.2, margin: "90px 0px 50px 0px" };

const TimelineComponent: FC<TimelineInputProps> = ({ data }) => {
  const isMobile = useDataContext().device !== "lg";
  const willChange = useWillChange();

  const commonParentProps: MotionProps = {
    style: { willChange },
    initial: "hidden",
    whileInView: "visible",
    transition: transition,
    viewport: viewPort,
  };
  const commonChildProps: MotionProps = {
    style: { willChange },
    variants: childVariant,
    transition: childTransitions,
  };

  const item = data;
  return (
    <div className={styles.main}>
      {item.map((e) => (
        <Fragment key={e.id}>
          <div className={styles.item}>
            <motion.div
              variants={variants}
              {...commonParentProps}
              className={styles.content}
            >
              <div>
                <motion.div {...commonChildProps} className={styles.header}>
                  <div>{e.title}</div>
                  {e.location ? <div>{e.location}</div> : null}
                </motion.div>
                {e.info ? (
                  <motion.div {...commonChildProps} className={styles.info}>
                    {e.info}
                  </motion.div>
                ) : null}
                {isMobile ? (
                  <motion.div
                    {...commonChildProps}
                    className={`${styles.info} ${styles.date}`}
                  >
                    {e.date}
                  </motion.div>
                ) : null}
              </div>
            </motion.div>
            <div id="timeline">
              <motion.div
                variants={nodeVariant}
                {...commonParentProps}
                className={styles.centerNode}
              >
                {e.icon}
              </motion.div>
            </div>
            <motion.div
              variants={variants}
              {...commonParentProps}
              className={`${styles.space} ${styles.date}`}
            >
              <div>{e.date}</div>
            </motion.div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default TimelineComponent;
