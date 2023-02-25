import React from "react";
import styles from "./../styles/Modal.module.scss";
import useStore from "@store/store";
import ModalBase from "@components/modal";
import SkillCard from "../components/skillCard";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useWillChange } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

const SkillModal = () => {
  const currentSelection = useStore((state) => state.currentSelection);
  const focusSelection = useStore((state) => state.focusSelection);

  const handleClickAway = () => {
    focusSelection(null);
  };

  const modalTransition: Transition = {
    type: "spring",
    stiffness: 200,
    damping: 20,
    staggerChildren: 0.1,
    delayChildren: 0.2,
  };

  const childrenVariant: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, scale: 0 },
  };

  const willChange: any = useWillChange();
  // TODO : Try to sole any here

  const OtherSkillSet = () => {
    return (
      <>
        {currentSelection?.intNode ? (
          <>
            {currentSelection?.intNode.map((e) => {
              return (
                <SkillCard
                  variants={childrenVariant}
                  transition={modalTransition}
                  key={e.name}
                  style={{ willChange }}
                  data={e}
                  className={styles.card}
                  node={"true"}
                />
              );
            })}
          </>
        ) : null}
      </>
    );
  };

  return (
    <>
      <ModalBase
        activation={currentSelection ? true : false}
        handleClickAway={handleClickAway}
      >
        <div className={styles.modalMain}>
          <div className={styles.modalHeading}>
            <span>{currentSelection?.icon}</span>
            <span>{currentSelection?.name}</span>
            <IconButton onClick={handleClickAway}>
              <CloseIcon />
            </IconButton>
          </div>
          <hr style={{ width: "100%" }} />
          <div className={styles.modalInfo}>
            <span>
              <span className={styles.modalInfoBold}>Type:</span>
              {currentSelection?.type}
            </span>
            <span>
              <span className={styles.modalInfoBold}>Proficiency:</span>
              {currentSelection?.level}
            </span>
          </div>
        </div>
        <OtherSkillSet />
      </ModalBase>
    </>
  );
};

export default SkillModal;
