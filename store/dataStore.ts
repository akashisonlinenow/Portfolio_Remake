import { create } from "zustand";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";
import type { SafeTypes } from "data/failSafe";
import dummyData from "data/failSafe";

interface storeInterface {
  projectData: null | SafeTypes[];

  getProjectData: (currentData: null | SafeTypes[]) => void;
}

const baseURL: string = `https://api.github.com/users/${process.env.gitUser}/repos`;

const useDataStore = create<storeInterface>()(
  persist(
    (set) => ({
      projectData: null,

      getProjectData: async (current) => {
        if (!current) {
          try {
            const data = axios.get(baseURL);
            const res = await data;
            set((state) => ({ projectData: res.data }));
          } catch {
            console.info("During Fetching API Something went wrong, Try Again");
            set((state) => ({ projectData: dummyData }));
          }
        }
      },
    }),
    {
      name: "ProjectData",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useDataStore;
