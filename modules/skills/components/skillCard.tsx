import React from "react";
import styles from "../styles/Card.module.scss";
import useStore from "store/store";
import Button from "@mui/material/Button";
import { Transition, Variants } from "framer-motion";
import { skillType, SubSkillType } from "data/skillsData";

type inputProps = {
  data: skillType | SubSkillType;
  style?: React.CSSProperties;
  className?: string;
  component?: any;
  variants?: Variants;
  transition?: Transition;
  whileInView?: any;
};

const SkillCard: React.FC<inputProps> = ({ data, className, ...rest }) => {
  // const currentSelection = useStore((state: any) => state.currentSelection);
  const focusSelection = useStore((state) => state.focusSelection);

  const initiateClick = (e: any) => {
    focusSelection(e);
  };

  return (
    <>
      <Button
        onClick={() => {
          initiateClick(data);
        }}
        className={`${styles.card} ${className}`}
        {...rest}
      >
        <div className={styles.icon}>{data.icon}</div>
        <div className={styles.cardName}>{data.name}</div>
      </Button>
    </>
  );
};

export default SkillCard;
