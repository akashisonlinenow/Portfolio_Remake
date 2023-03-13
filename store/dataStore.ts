import axios from "axios";
import dummyData from "data/failSafe";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { DataStoreInterface } from "types/storeInterface";

const baseURL: string = `https://api.github.com/users/${
  process.env.NEXT_PUBLIC_GITHUB_USERNAME || "KingBael09"
}/repos`;

const useDataStore = create<DataStoreInterface>()(
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
