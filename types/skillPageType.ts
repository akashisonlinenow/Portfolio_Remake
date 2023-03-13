import type { MotionProps, Transition, Variant } from "framer-motion";
import type { SkillTypes } from "types/DataTypes";

export interface SkillCardProps extends MotionProps {
  data: SkillTypes;
  style?: React.CSSProperties;
  className?: string;
  node?: "true" | "false";
}
