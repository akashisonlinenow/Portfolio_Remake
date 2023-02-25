import type { Transition, Variant } from "framer-motion";
import type { SkillTypes } from "types/DataTypes";

export interface SkillCardProps {
  data: SkillTypes;
  style?: React.CSSProperties;
  className?: string;
  variants?: Variant;
  transition?: Transition;
  node?: "true" | "false";
}
