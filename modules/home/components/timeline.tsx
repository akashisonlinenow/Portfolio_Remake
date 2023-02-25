import React from "react";
import styles from "../styles/TimelineComponent.module.scss";
import { motion, useWillChange } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import { useDataContext } from "@context/dataLayer";

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

type inputProps = {
  data: timelineItem[];
};

type timelineItem = {
  id?: number;
  date: string;
  icon: JSX.Element;
  title: string;
  location?: string | null;
  info?: string | null;
};

const TimelineComponent: React.FC<inputProps> = (props) => {
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;

  const willChange = useWillChange();

  const item = props.data;
  return (
    <div className={styles.main}>
      {item.map((e) => {
        return (
          <React.Fragment key={e.id}>
            <div className={styles.item}>
              <motion.div
                style={{ willChange }}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={viewPort}
                className={styles.content}
              >
                <div>
                  <motion.div
                    style={{ willChange }}
                    variants={childVariant}
                    transition={childTransitions}
                    className={styles.header}
                  >
                    <div>{e.title}</div>
                    {e.location ? <div>{e.location}</div> : null}
                  </motion.div>
                  {e.info ? (
                    <motion.div
                      style={{ willChange }}
                      variants={childVariant}
                      transition={childTransitions}
                      className={styles.info}
                    >
                      {e.info}
                    </motion.div>
                  ) : null}
                  {isMobile ? (
                    <motion.div
                      style={{ willChange }}
                      variants={childVariant}
                      transition={childTransitions}
                      className={`${styles.info} ${styles.date}`}
                    >
                      {e.date}
                    </motion.div>
                  ) : null}
                </div>
              </motion.div>
              <div id="timeline">
                <motion.div
                  style={{ willChange }}
                  variants={nodeVariant}
                  initial="hidden"
                  whileInView="visible"
                  transition={transition}
                  viewport={viewPort}
                  className={styles.centerNode}
                >
                  {e.icon}
                </motion.div>
              </div>
              <motion.div
                style={{ willChange }}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={transition}
                viewport={viewPort}
                className={`${styles.space} ${styles.date}`}
              >
                <div>{e.date}</div>
              </motion.div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TimelineComponent;

// TODO : Optimize Code
