import type { SkillTypes } from "@data/skillsData";
import { create } from "zustand";

interface storeInterface {
  currentSelection: null | SkillTypes;
  menuStatus: boolean;
  dialogStatus: boolean;
  focusSelection: (data: null | SkillTypes) => void;
  menuSwitch: () => void;
  dialogSwitch: () => void;
}

const useStore = create<storeInterface>((set) => ({
  currentSelection: null,
  menuStatus: false,
  dialogStatus: false,

  focusSelection(data) {
    set((state) => ({ currentSelection: data }));
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
