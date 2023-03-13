import styles from "@styles/BaseModal.module.scss";
import Portal from "@components/portal";
import ScrollDisable from "@hooks/scrollDisable";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useDataContext } from "@context/dataLayer";
import { motion, useWillChange } from "framer-motion";
import type { FC } from "react";
import type { Transition, Variants } from "framer-motion";
import type { ModalProps } from "types/modalProps";

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
const backgroundVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ModalBase: FC<ModalProps> = ({
  activation,
  children,
  handleClickAway,
  ...rest
}) => {
  ScrollDisable(activation);

  const willChange = useWillChange();
  const isMobile = useDataContext().device !== "lg";

  const commonProps = {
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    style: { willChange },
  };

  return (
    <Portal>
      {activation && (
        <>
          <div className={styles.modal}>
            <ClickAwayListener touchEvent={false} onClickAway={handleClickAway}>
              <motion.div
                variants={!isMobile ? modalVariants : undefined}
                transition={modalTransition}
                id="ModalBody"
                className={styles.modalBody}
                {...commonProps}
                {...rest}
              >
                {children}
              </motion.div>
            </ClickAwayListener>
          </div>
          <motion.div
            variants={!isMobile ? backgroundVariants : undefined}
            className={styles.modalBackground}
            {...commonProps}
          />
        </>
      )}
    </Portal>
  );
};

export default ModalBase;
