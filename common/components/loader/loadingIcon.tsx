import React from "react";
import styles from "@styles/LoaderIcon.module.scss";
import { motion } from "framer-motion";
import { AnimatePropsSemi, ScaleVariant } from "@animate/framer";

const LoadingIcon = () => {
  return (
    <motion.div
      variants={ScaleVariant}
      className={styles.container}
      {...AnimatePropsSemi}
    >
      <div className={`${styles.pl} ${styles.plLeapfrog}`}></div>
    </motion.div>
  );
};

export default LoadingIcon;
