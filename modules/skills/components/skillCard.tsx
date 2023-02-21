import React from "react";
import styles from "../styles/Card.module.scss";
import useStore from "store/store";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import type { Transition, Variant } from "framer-motion";
import { useDataContext } from "@context/dataLayer";
import type { SkillTypes } from "@data/skillsData";

interface inputProps {
  data: SkillTypes;
  style?: React.CSSProperties;
  className?: string;
  variants?: Variant;
  transition?: Transition;
}

// ! Experemental

// TODO:  Learn how to do Conditional Types to inherit MotionProps when enableMotion prop in passed

const SkillCard: React.FC<inputProps> = ({ data, className, ...rest }) => {
  // const currentSelection = useStore((state: any) => state.currentSelection);
  const focusSelection = useStore((state) => state.focusSelection);
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;
  return (
    <>
      <Button
        onClick={() => {
          focusSelection(data);
        }}
        className={`${styles.card} ${className}`}
        component={!isMobile ? motion.button : Button}
        {...rest}
      >
        <div className={styles.icon}>{data.icon}</div>
        <div className={styles.cardName}>{data.name}</div>
      </Button>
    </>
  );
};

export default SkillCard;
