// import { useDataContext } from "@context/dataLayer";
import { motion, useWillChange } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import type { PropsWithChildren, FC } from "react";
import { useDataContext } from "@context/dataLayer";

const variants: Variants = {
  hidden: { opacity: 0, x: 50, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -50 },
};

const transition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
};

export const Container: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useDataContext().device !== "lg";

  const willChange = useWillChange();

  return (
    <>
      {!isMobile ? (
        <>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={transition}
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
