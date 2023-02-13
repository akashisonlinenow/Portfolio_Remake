import React from "react";
import styles from "../styles/Card.module.scss";
import useStore from "store/store";
import Button from "@mui/material/Button";
import { motion, MotionProps } from "framer-motion";
import { skillType, SubSkillType } from "data/skillsData";

interface inputProps extends MotionProps {
  data: skillType | SubSkillType;
  style?: React.CSSProperties;
  className?: string;
  hover?: boolean;
}

const SkillCard: React.FC<inputProps> = ({
  data,
  className,
  hover,
  ...rest
}) => {
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
        component={motion.button}
        {...rest}
        whileHover={
          hover
            ? {
                scale: 1.03,
                transition: { type: "spring" },
              }
            : undefined
        }
      >
        <div className={styles.icon}>{data.icon}</div>
        <div className={styles.cardName}>{data.name}</div>
      </Button>
    </>
  );
};

export default SkillCard;
