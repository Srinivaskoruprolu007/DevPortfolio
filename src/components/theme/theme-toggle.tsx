import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative flex items-center justify-between w-16 h-8 px-1 bg-gray-300 dark:bg-gray-800 rounded-full shadow-md transition-all focus:outline-none"
    >
      <span
        className={`absolute w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transition-transform duration-300 ${
          theme === "light" ? "translate-x-8" : "translate-x-1"
        }`}
      />
      <Sun
        className={`absolute left-2 w-4 h-4 text-yellow-500 transition-opacity duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
      <Moon
        className={`absolute right-2 w-4 h-4 text-blue-400 transition-opacity duration-300 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      />
    </Button>
  );
}
