import React from "react";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import styles from "@styles/BaseModal.module.scss";

interface modalProps {
  activation: any;
  children: React.ReactNode;
  handleClickAway: () => void;
}

const modalTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
  staggerChildren: 0.1,
  delayChildren: 0.2,
};
const modalVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const ModalBase: React.FC<modalProps> = ({
  activation,
  children,
  handleClickAway,
}) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {activation && (
          <>
            <div className={styles.modal}>
              <ClickAwayListener
                touchEvent={false}
                onClickAway={handleClickAway}
              >
                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={modalTransition}
                  id="ModalBody"
                  layout
                  // !layout makes it Kinda FuckedUp
                  className={styles.modalBody}
                >
                  {children}
                </motion.div>
              </ClickAwayListener>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.modalBackground}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalBase;
