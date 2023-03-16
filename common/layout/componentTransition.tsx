import { useDataContext } from "@context/dataLayer";
import { AnimatePresence, motion, useWillChange } from "framer-motion";
import {
  StaggeredTransition,
  WhileInViewX,
  DefaultViewPort,
  AnimatePropsSemi,
} from "@animate/framer";
import type { FC } from "react";
import type { ComponentTransitionProps } from "types/layoutProps";

const Component: FC<ComponentTransitionProps> = ({ children, ...rest }) => {
  const isMobile = useDataContext().device !== "lg";
  const willChange = useWillChange();

  return (
    <AnimatePresence mode="wait">
      {!isMobile ? (
        <motion.div
          variants={WhileInViewX}
          viewport={DefaultViewPort}
          transition={StaggeredTransition}
          style={{ willChange }}
          {...AnimatePropsSemi}
          {...rest}
        >
          {children}
        </motion.div>
      ) : (
        <div {...rest}>{children}</div>
      )}
    </AnimatePresence>
  );
};

export default Component;
