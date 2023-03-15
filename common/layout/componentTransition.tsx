import { useDataContext } from "@context/dataLayer";
import { AnimatePresence, motion, useWillChange } from "framer-motion";
import type { FC } from "react";
import type { ComponentTransitionProps } from "types/layoutProps";
import {
  StaggeredTransition,
  WhileInViewX,
  DefaultViewPort,
} from "common/animation/framer";

const Component: FC<ComponentTransitionProps> = ({ children, ...rest }) => {
  const isMobile = useDataContext().device !== "lg";
  const willChange = useWillChange();

  return (
    <AnimatePresence mode="wait">
      {!isMobile ? (
        <>
          <motion.div
            variants={WhileInViewX}
            initial="hidden"
            whileInView="visible"
            viewport={DefaultViewPort}
            transition={StaggeredTransition}
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
