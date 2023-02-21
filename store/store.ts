import type { SkillTypes } from "@data/skillsData";
import type { SafeTypes } from "data/failSafe";
import { create } from "zustand";

interface storeInterface {
  currentSelection: null | SkillTypes;
  menuStatus: boolean;
  dialogStatus: boolean;
  currentProject: null | SafeTypes;
  focusSelection: (data: null | SkillTypes) => void;
  focusProject: (data: null | SafeTypes) => void;
  menuSwitch: () => void;
  dialogSwitch: () => void;
}

let useStore = create<storeInterface>((set) => ({
  currentSelection: null,
  menuStatus: false,
  dialogStatus: false,
  currentProject: null,

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
}));

export default useStore;
