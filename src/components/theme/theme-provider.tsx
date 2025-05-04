import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: "light" | "dark" | "system"; // Keep props for potential initial setup, though store handles persistence
  storageKey?: string; // Keep props for potential initial setup, though store handles persistence
};

// This component now primarily ensures the theme is applied on initial load
// and potentially could handle other global setup if needed.
// The actual state management is delegated to the Zustand store.
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize/rehydrate theme from store
  // The Zustand persist middleware handles loading from localStorage
  // and the onRehydrateStorage callback applies the theme.
  // We might still need an effect to apply the theme initially if
  // the hydration logic doesn't cover all edge cases or server-side rendering scenarios.

  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  // Effect to apply theme on mount and when theme changes in store
  // This might be redundant if onRehydrateStorage works perfectly,
  // but serves as a fallback and handles dynamic changes.
  useEffect(() => {
    // Call setTheme from the store which includes the logic to update the DOM
    setTheme(theme);
  }, [theme, setTheme]);

  // The provider wrapper might not be strictly necessary anymore for theme state,
  // but can be kept for structure or if other context values are added later.
  // If no other context is needed, this could be simplified to just return {children}.
  return <>{children}</>;
}

// The useTheme hook is no longer needed as components will directly use useThemeStore
// export const useTheme = () => {
//   const context = useContext(ThemeProviderContext);
//   if (context === undefined) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
