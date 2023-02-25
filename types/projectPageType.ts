import type { SafeTypes } from "types/DataTypes";

export interface ActionInterface {
  data: SafeTypes;
  variant?: "default" | "withText";
}

export interface ProjectCardProps {
  data: SafeTypes;
  isMobile: boolean;
  failCase?: boolean;
}

export interface LanguageProps {
  [key: string]: number;
}

export interface DataProps {
  id: string;
  value: number;
}
export interface PieProps {
  data: DataProps[];
}
