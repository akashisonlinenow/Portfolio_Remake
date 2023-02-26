import { create } from "zustand";
import type { StoreInterface, NoticeType } from "types/storeInterface";

const defaultNotice: NoticeType = {
  activation: false,
  msg: "...",
  status: "success",
};

const useStore = create<StoreInterface>((set) => ({
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
