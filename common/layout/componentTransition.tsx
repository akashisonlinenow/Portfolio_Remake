import React, { CSSProperties, PropsWithChildren } from "react";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import { useDataContext } from "@context/dataLayer";

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

const viewPort = { once: true, amount: 0.9 };

interface propOptions extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  ref?: any;
}

const Component: React.FC<propOptions> = ({ children, ...rest }) => {
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;

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
