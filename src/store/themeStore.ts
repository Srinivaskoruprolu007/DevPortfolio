import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => {
        set({ theme });
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");

        if (theme === "system") {
          const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light";
          theme = systemTheme;
        }

        root.classList.add(theme);
      },
    }),
    {
      name: "portfolio-theme-storage", // unique name
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setTheme(state.theme); // Apply theme on hydration
        }
      },
    }
  )
);
