import { skillType } from "data/skillsData";
import { create } from "zustand";

interface storeInterface {
  currentSelection: null | skillType;
  focusSelection: (data: null | skillType) => void;
}

const useStore = create<storeInterface>((set) => ({
  currentSelection: null,

  focusSelection: (data) =>
    set((state) => ({
      currentSelection: data,
    })),
}));

export default useStore;
