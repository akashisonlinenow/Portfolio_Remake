import React from "react";
import SkillCard from "modules/skills/components/skillCard";
import styles from "./styles/Skills.module.scss";
import Heading from "@components/heading/heading";
import Component from "@layout/componentTransition";
import { ToolData } from "data/skillsData";
import { motion, Transition, Variants } from "framer-motion";

const ParentVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  // exit: { opacity: 0, x: 50 },
};

const ParentTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
  staggerChildren: 0.1,
};

const ToolsPage = () => {
  return (
    <>
      <Heading title="Tools" />
      <Component>
        <motion.div
          // variants={ParentVariants}
          // initial="hidden"
          // animate="visible"
          // transition={ParentTransition}
          // layout
          className={styles.container}
        >
          {ToolData.map((e) => {
            return <SkillCard key={e.name} data={e} />;
          })}
        </motion.div>
      </Component>
    </>
  );
};

export default ToolsPage;
