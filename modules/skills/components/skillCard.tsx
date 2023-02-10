import React, { CSSProperties, useState } from "react";
import styles from "../styles/Card.module.scss";
import { Button, ButtonBase } from "@mui/material";
import { skillType, SubSkillType } from "data/skillsData";
import { Transition, Variants } from "framer-motion";
import useStore from "store/store";

type inputProps = {
  data: skillType | SubSkillType;
  style?: CSSProperties;
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
