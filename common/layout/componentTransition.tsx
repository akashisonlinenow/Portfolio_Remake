import React from "react";
import { useDataContext } from "@context/dataLayer";
import { AnimatePresence, motion, useWillChange } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

const transition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  staggerChildren: 0.1,
};

const variants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const viewPort = { once: true, amount: 0.8 };

interface propOptions extends React.PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  ref?: any;
}

const Component: React.FC<propOptions> = ({ children, ...rest }) => {
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;

  const willChange = useWillChange();

  return (
    <AnimatePresence mode="wait">
      {!isMobile ? (
        <>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={viewPort}
            transition={transition}
            style={{ willChange }}
            {...rest}
          >
            {children}
          </motion.div>
        </>
      ) : (
        <div {...rest}>{children}</div>
      )}
    </AnimatePresence>
  );
};

export default Component;
