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
      className="relative flex items-center justify-center w-12 h-12 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg transition-all hover:scale-105 focus:outline-none"
    >
      <Sun
        className={`h-6 w-6 transition-all duration-300 ease-in-out transform ${theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      />
      <Moon
        className={`h-6 w-6 transition-all duration-300 ease-in-out transform ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
