import React from "react";
import styles from "../styles/Card.module.scss";
import { ButtonBase } from "@mui/material";
import { skillType } from "data/skillsData";
import { motion } from "framer-motion";
import Link from "next/link";

type inputProps = {
  data: skillType;
};

const SkillCard: React.FC<inputProps> = ({ data }) => {
  return (
    <ButtonBase className={styles.card}>
      <div className={styles.icon}>{data.icon}</div>
      <div className={styles.cardName}>{data.name}</div>
    </ButtonBase>
  );
};

export default SkillCard;
