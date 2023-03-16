import type { MotionProps, Transition, Variants } from "framer-motion";
import type { ViewportOptions } from "types/commonTypes";

export const DefaultViewPort: ViewportOptions = {
  once: true,
  amount: 0.7,
};

export const AbstractTransition: Transition = {
  type: "spring",
};

export const BaseTransition: Transition = {
  ...AbstractTransition,
  damping: 30,
};

export const DefaultTransition: Transition = {
  ...BaseTransition,
  stiffness: 300,
};

export const StaggeredTransition: Transition = {
  ...DefaultTransition,
  staggerChildren: 0.1,
};

export const DefaultVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const ModalVariants: Variants = {
  hidden: { ...DefaultVariant.hidden, x: 0, y: 50 },
  visible: { ...DefaultVariant.visible, x: 0, y: 0 },
  exit: { ...DefaultVariant.exit, x: 0, y: 100 },
};

export const PageVariants: Variants = {
  hidden: { opacity: 0, x: 50, y: 0 },
  visible: { ...ModalVariants.visible },
  exit: { opacity: 0, x: 0, y: -50 },
};

export const WhileInViewX: Variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  visible: { ...ModalVariants.visible },
};

export const TimelineVariants: Variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  visible: { ...ModalVariants.visible },
};

export const TimelineNodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

export const AlternateSkillVarinat: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, scale: 0 },
};

export const ScaleVariant: Variants = {
  hidden: { scale: 0.3 },
  visible: { scale: 1 },
};

export const PopFromTop: Variants = {
  hidden: { opacity: 0, y: -70 },
  visible: { opacity: 1, y: 0 },
};

export const AnimatePropsFull: MotionProps = {
  initial: "hidden",
  animate: "visible",
  exit: "exit",
};

export const AnimatePropsSemi: MotionProps = {
  initial: "hidden",
  animate: "visible",
};
