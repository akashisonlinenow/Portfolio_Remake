import styles from "@styles/BaseModal.module.scss";
import Portal from "@components/portal";
import ScrollDisable from "@hooks/scrollDisable";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useDataContext } from "@context/dataLayer";
import { motion, useWillChange } from "framer-motion";
import {
  AnimatePropsFull,
  DefaultVariant,
  ModalVariants,
  StaggeredTransition,
} from "@animate/framer";
import type { FC } from "react";
import type { ModalProps } from "types/modalProps";

const ModalBase: FC<ModalProps> = ({
  activation,
  children,
  handleClickAway,
  ...rest
}) => {
  ScrollDisable(activation);

  const willChange = useWillChange();
  const isMobile = useDataContext().device !== "lg";

  return (
    <Portal>
      {activation && (
        <>
          <div className={styles.modal}>
            <ClickAwayListener touchEvent={false} onClickAway={handleClickAway}>
              <motion.div
                variants={!isMobile ? ModalVariants : undefined}
                transition={StaggeredTransition}
                style={{ willChange }}
                id="ModalBody"
                className={styles.modalBody}
                {...AnimatePropsFull}
                {...rest}
              >
                {children}
              </motion.div>
            </ClickAwayListener>
          </div>
          <motion.div
            variants={!isMobile ? DefaultVariant : undefined}
            className={styles.modalBackground}
            {...AnimatePropsFull}
          />
        </>
      )}
    </Portal>
  );
};

export default ModalBase;
