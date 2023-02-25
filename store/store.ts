import { create } from "zustand";
import type { SkillTypes } from "types/DataTypes";
import type { SafeTypes } from "types/DataTypes";

interface NoticeType {
  activation: boolean;
  msg: string;
  status?: "success" | "error" | "info" | "warning";
}

interface langType {
  [key: string]: number;
}

interface storeInterface {
  currentSelection: null | SkillTypes;
  menuStatus: boolean;
  dialogStatus: boolean;
  currentProject: null | SafeTypes;
  notification: NoticeType;
  currentLang: null | langType;
  focusProjLang: (data: langType | null) => void;
  focusSelection: (data: null | SkillTypes) => void;
  focusProject: (data: null | SafeTypes) => void;
  menuSwitch: () => void;
  dialogSwitch: () => void;
  setNotification: (data: NoticeType) => void;
  clearNotification: () => void;
}

const defaultNotice: NoticeType = {
  activation: false,
  msg: "...",
  status: "success",
};

const useStore = create<storeInterface>((set) => ({
  currentSelection: null,
  menuStatus: false,
  dialogStatus: false,
  currentProject: null,
  notification: defaultNotice,
  currentLang: null,

  focusProjLang(data) {
    set((state) => ({ currentLang: data }));
  },

  focusProject(data) {
    set((state) => ({
      currentProject: data,
    }));
  },

  focusSelection(data) {
    set((state) => ({
      currentSelection: data,
    }));
  },

  menuSwitch() {
    set((state) => ({
      menuStatus: !state.menuStatus,
    }));
  },

  dialogSwitch() {
    set((state) => ({
      dialogStatus: !state.dialogStatus,
    }));
  },

  setNotification(data) {
    set((state) => ({ notification: data }));
  },
  clearNotification() {
    set((state) => ({ notification: defaultNotice }));
  },
}));

export default useStore;
