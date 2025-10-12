"use client";

import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Subtle haptic feedback
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(40);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      role="switch"
      aria-checked={theme === "dark"}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`relative w-16 h-9 p-1 rounded-full overflow-hidden border transition-all duration-500 shadow-inner
        ${
          theme === "light"
            ? "bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-50 border-yellow-200 hover:shadow-[0_0_15px_rgba(255,223,128,0.4)]"
            : "bg-gradient-to-r from-slate-800 via-gray-900 to-slate-700 border-gray-700 hover:shadow-[0_0_15px_rgba(120,180,255,0.3)]"
        }`}
    >
      {/* Subtle background shimmer */}
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 0.6 }}
        className={`absolute inset-0 rounded-full bg-gradient-to-r ${
          theme === "light"
            ? "from-white/60 to-yellow-100/40"
            : "from-blue-500/20 to-indigo-400/10"
        } blur-md`}
      />

      {/* Thumb / Toggle Knob */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className={`absolute top-1 left-1 w-7 h-7 rounded-full shadow-md transition-all duration-500 ${
          theme === "light"
            ? "bg-white shadow-[inset_0_0_2px_rgba(255,255,255,0.6),_0_4px_8px_rgba(255,180,80,0.4)]"
            : "bg-gray-900 shadow-[inset_0_0_3px_rgba(255,255,255,0.2),_0_4px_8px_rgba(0,0,0,0.6)]"
        }`}
        style={{
          transform:
            theme === "dark"
              ? "translateX(calc(100% - 0.25rem))"
              : "translateX(0px)",
        }}
      >
        {/* Shine reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-full opacity-40" />
      </motion.div>

      {/* Icons */}
      <div className="relative w-full flex items-center justify-between px-2">
        <motion.div
          animate={{
            opacity: theme === "light" ? 1 : 0,
            scale: theme === "light" ? 1 : 0.6,
            rotate: theme === "light" ? 0 : -90,
          }}
          transition={{ duration: 0.4 }}
        >
          <Sun
            className="w-4 h-4 text-yellow-500 drop-shadow-[0_0_6px_rgba(255,215,100,0.5)]"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          animate={{
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.6,
            rotate: theme === "dark" ? 0 : 90,
          }}
          transition={{ duration: 0.4 }}
        >
          <Moon
            className="w-4 h-4 text-blue-400 drop-shadow-[0_0_6px_rgba(100,160,255,0.5)]"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </Button>
  );
}
