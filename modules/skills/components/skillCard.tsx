import React from "react";
import styles from "../styles/Card.module.scss";
import useStore from "store/store";
import Button from "@mui/material/Button";
import { motion, MotionProps } from "framer-motion";
// import { skillType, SubSkillType } from "data/skillsData";
import type { SkillTypes } from "@data/skillsData";

interface inputProps extends MotionProps {
  // data: skillType | SubSkillType;
  data: SkillTypes;
  style?: React.CSSProperties;
  className?: string;
}

const SkillCard: React.FC<inputProps> = ({ data, className, ...rest }) => {
  // const currentSelection = useStore((state: any) => state.currentSelection);
  const focusSelection = useStore((state) => state.focusSelection);

  return (
    <>
      <Button
        onClick={() => {
          focusSelection(data);
        }}
        className={`${styles.card} ${className}`}
        component={motion.button}
        {...rest}
      >
        <div className={styles.icon}>{data.icon}</div>
        <div className={styles.cardName}>{data.name}</div>
      </Button>
    </>
  );
};

export default SkillCard;
