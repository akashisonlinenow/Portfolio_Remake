import React from "react";
import { useDataContext } from "@context/dataLayer";
import { motion, useWillChange } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
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

  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;
  // debugger;

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
            style={{willChange}}
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
