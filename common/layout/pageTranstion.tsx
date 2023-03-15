// import { useDataContext } from "@context/dataLayer";
import { motion, useWillChange } from "framer-motion";
import { useDataContext } from "@context/dataLayer";
import { BaseTransition, PageVariants } from "common/animation/framer";
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
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ ...{ stiffness: 260 }, ...BaseTransition }}
            className="page-ani"
            style={{ willChange }}
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
