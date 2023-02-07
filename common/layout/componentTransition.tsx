import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import { useDataContext } from "@context/dataLayer";

const transition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  staggerChildren: 0.1,
};

const variants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const viewPort = { once: true, amount: 0.6, margin: "10px" };

interface propOptions extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  ref?: any;
}

const Component: React.FC<propOptions> = (props) => {
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
            {...props}
          >
            {props.children}
          </motion.div>
        </>
      ) : (
        <div {...props}>{props.children}</div>
      )}
    </AnimatePresence>
  );
};

export default Component;
