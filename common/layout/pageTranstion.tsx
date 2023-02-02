import React, { PropsWithChildren } from "react";
import { motion, Transition, useIsPresent, Variants } from "framer-motion";
import { useDataContext } from "@context/dataLayer";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
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

  // const isPresent = useIsPresent();

  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;
  // debugger;

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
          >
            {children}
          </motion.div>
          {/* <motion.div
            initial={{ scaleX: 1 }}
            animate={{
              scaleX: 0,
              transition: { duration: 0.5, ease: "circOut" },
            }}
            exit={{
              scaleX: 1,
              transition: { duration: 0.5, ease: "circIn" },
            }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="privacy-screen"
          >
            <motion.circle
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1, transition: { delay: 1 } }}
              // exit={{ opacity: 1 }}
              className="pac-man"
            />
          </motion.div> */}
        </>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default Container;
