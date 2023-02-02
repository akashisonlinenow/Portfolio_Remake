import React from "react";
import styles from "@styles/LoaderIcon.module.scss";
import { motion } from "framer-motion";

const LoadingIcon = () => {
  return (
    <motion.div
      initial={{ scale: 0.3 }}
      animate={{ scale: 1 }}
      className={styles.container}
    >
      <div className={`${styles.pl} ${styles.plLeapfrog}`}></div>
    </motion.div>
  );
};

export default LoadingIcon;
