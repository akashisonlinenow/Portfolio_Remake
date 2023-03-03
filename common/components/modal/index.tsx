import { useEffect } from "react";
import styles from "@styles/BaseModal.module.scss";
import Portal from "@components/portal";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { motion, useWillChange } from "framer-motion";
import type { FC } from "react";
import type { Transition, Variants } from "framer-motion";
import type { ModalProps } from "types/modalProps";
import { useDataContext } from "common/context/dataLayer";

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
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth;

    if (activation) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("padding-right");
    }
  }, [activation]);

  const willChange = useWillChange();
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;

  return (
    <Portal>
      {activation && (
        <>
          <div className={styles.modal}>
            <ClickAwayListener touchEvent={false} onClickAway={handleClickAway}>
              <motion.div
                variants={!isMobile ? modalVariants : undefined}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={modalTransition}
                id="ModalBody"
                className={styles.modalBody}
                style={{ willChange }}
                {...rest}
              >
                {children}
              </motion.div>
            </ClickAwayListener>
          </div>
          <motion.div
            variants={!isMobile ? backgroundVariants : undefined}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            style={{ willChange }}
            className={styles.modalBackground}
          />
        </>
      )}
    </Portal>
  );
};

export default ModalBase;
// TODO: Try to Optimize Animation props
