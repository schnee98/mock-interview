import { create } from "zustand";

type Developer = "backend" | "frontend" | "ios";

interface SelectionStoreState {
  developer: Developer;
  theme: string;
  themeDetails: string[];
  setDeveloper: (developer: Developer) => void;
  setTheme: (theme: string) => void;
  setThemeDetails: (themeDetails: string[]) => void;
}

const useSelectionStore = create<SelectionStoreState>((set) => ({
  developer: "frontend",
  theme: "",
  themeDetails: [],
  setDeveloper: (developer: Developer) => set({ developer }),
  setTheme: (theme: string) => set({ theme }),
  setThemeDetails: (themeDetails: string[]) => set({ themeDetails }),
}));
