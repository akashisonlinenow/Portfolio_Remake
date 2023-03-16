// import { useDataContext } from "@context/dataLayer";
import { motion, useWillChange } from "framer-motion";
import { useDataContext } from "@context/dataLayer";
import {
  AnimatePropsFull,
  BaseTransition,
  PageVariants,
} from "@animate/framer";
import type { PropsWithChildren, FC } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useDataContext().device !== "lg";

  const willChange = useWillChange();

  return (
    <>
      {!isMobile ? (
        <>
          <motion.div
            variants={PageVariants}
            transition={{ ...{ stiffness: 260 }, ...BaseTransition }}
            className="page-ani"
            style={{ willChange }}
            {...AnimatePropsFull}
          >
            {children}
          </motion.div>
        </>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default Container;
