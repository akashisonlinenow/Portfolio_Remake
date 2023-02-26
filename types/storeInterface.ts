import type { SafeTypes } from "types/DataTypes";
import type { SkillTypes } from "types/DataTypes";
import type { LanguageProps } from "./projectPageType";

export interface DataStoreInterface {
  projectData: null | SafeTypes[];
  getProjectData: (currentData: null | SafeTypes[]) => void;
}

export interface NoticeType {
  activation: boolean;
  msg: string;
  status?: "success" | "error" | "info" | "warning";
}

export interface StoreInterface {
  currentSelection: null | SkillTypes;
  menuStatus: boolean;
  dialogStatus: boolean;
  currentProject: null | SafeTypes;
  notification: NoticeType;
  currentLang: null | LanguageProps;
  focusProjLang: (data: LanguageProps | null) => void;
  focusSelection: (data: null | SkillTypes) => void;
  focusProject: (data: null | SafeTypes) => void;
  menuSwitch: () => void;
  dialogSwitch: () => void;
  setNotification: (data: NoticeType) => void;
  clearNotification: () => void;
}
