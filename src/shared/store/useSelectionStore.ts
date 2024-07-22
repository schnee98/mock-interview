import { Developer } from "shared/constants";
import { create } from "zustand";

interface SelectionStoreState {
  developer: Developer;
  theme: string[];
  themeContents: string[];
  setDeveloper: (developer: Developer) => void;
  setTheme: (theme: string[]) => void;
  setThemeContents: (themeContents: string[]) => void;
}

const useSelectionStore = create<SelectionStoreState>((set) => ({
  developer: "frontend",
  theme: [],
  themeContents: [],
  setDeveloper: (developer: Developer) => set({ developer }),
  setTheme: (theme: string[]) => set({ theme }),
  setThemeContents: (themeContents: string[]) => set({ themeContents }),
}));

export default useSelectionStore;
