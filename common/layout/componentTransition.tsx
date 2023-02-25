import { useDataContext } from "@context/dataLayer";
import { AnimatePresence, motion, useWillChange } from "framer-motion";
import type { FC } from "react";
import type { Transition, Variants } from "framer-motion";
import type { ComponentTransitionProps } from "types/layoutProps";

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

const Component: FC<ComponentTransitionProps> = ({ children, ...rest }) => {
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
