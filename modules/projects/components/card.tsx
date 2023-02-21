import React, { useState } from "react";
import styles from "../styles/Card.module.scss";
import ButtonBase from "@mui/material/ButtonBase";
import ActionButtons from "./actionButtons";
import { TbGitFork, TbStar } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "store/store";
import type { SafeTypes } from "@data/failSafe";

interface cardProps {
  data: SafeTypes;
  isMobile: boolean;
}

const ProjectCard = ({ data, isMobile }: cardProps) => {
  const [hover, setHover] = useState(isMobile ? true : false);
  const focusSelection = useStore((state) => state.focusProject);

  const e = data;
  const startHover = () => {
    !isMobile && setHover(true);
  };
  const endHover = () => {
    !isMobile && setHover(false);
  };

  return (
    <>
      <motion.div
        onHoverStart={startHover}
        onHoverEnd={endHover}
        className={styles.card}
      >
        <AnimatePresence mode="wait">
          {hover && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className={styles.cardExtra}
            >
              <ActionButtons />
            </motion.div>
          )}
        </AnimatePresence>
        <ButtonBase
          onClick={() => {
            focusSelection(e);
          }}
          className={styles.cardBody}
        >
          <div className={styles.heading}>{e.name}</div>
          <div className={styles.lang}>{e.language}</div>
          <div className={styles.stats}>
            <span>
              <TbStar /> {e.stargazers_count}
            </span>
            <span>
              <TbGitFork /> {e.forks}
            </span>
          </div>
        </ButtonBase>
      </motion.div>
    </>
  );
};

export default ProjectCard;
