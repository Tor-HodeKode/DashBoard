import { getStoredMode, setStoredMode } from "@/util/localStorage";
import { useEffect, useState } from "react";

// Detect dark mode
export function useIsDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== "undefined") {
      // Check if the document has the 'dark' class
      if (document.documentElement.classList.contains("dark")) {
        return true;
      }
      // Check stored mode in localStorage
      const storedMode = getStoredMode();
      if (storedMode === "dark") {
        document.documentElement.classList.add("dark");
        return true;
      }
    }
    return false;
  });
  
  // Listen for changes in the document's class attribute
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

// Initialize theme based on current theme mode
export function iniTheme() {
  const storedMode = getStoredMode();
  const htmlClassList = document.documentElement.classList;
  if (storedMode === "dark") {
    htmlClassList.add("dark");
  } else if (storedMode === "light") {
    htmlClassList.remove("dark");
  }
}

// Toggle theme function
export function toggleThemeMode(isDark) {
  const htmlClassList = document.documentElement.classList;
  if (isDark) {
    htmlClassList.remove("dark");
    setStoredMode("light");
  } else {
    htmlClassList.add("dark");
    setStoredMode("dark");
  }
}

// Set theme function
export function setThemeMode(mode) {
  const htmlClassList = document.documentElement.classList;
  if (mode === "dark") {
    htmlClassList.add("dark");
    setStoredMode("dark");
  } else {
    htmlClassList.remove("dark");
    setStoredMode("light");
  }
}

// Define tint style
export const tints = {
  blue: " bg-[#3758eb] text-white hover:bg-[#1c41e6]",
  red: " bg-[#e63946] text-white hover:bg-[#d62839]",
  green: " bg-[#2a9d8f] text-white hover:bg-[#21867a]",
  yellow: " bg-[#d9e710] text-black hover:bg-[#d6dd78]",
  purple: " bg-[#6c63ff] text-white hover:bg-[#4238fa]",
  orange: " bg-[#f77f00] text-white hover:bg-[#eeab64]",
};
export const tintsDark = {
  blue: " dark:bg-[#3758eb] dark:text-white dark:hover:bg-[#1c41e6]",
  red: " dark:bg-[#e63946] dark:text-white dark:hover:bg-[#d62839]",
  green: " dark:bg-[#2a9d8f] dark:text-white dark:hover:bg-[#21867a]",
  yellow: " dark:bg-[#d9e710] dark:text-black dark:hover:bg-[#d6dd78]",
  purple: " dark:bg-[#6c63ff] dark:text-white dark:hover:bg-[#4238fa]",
  orange: " dark:bg-[#f77f00] dark:text-white dark:hover:bg-[#eeab64]",
  white: " dark:bg-white dark:text-black dark:hover:bg-[#b4b4b4]",
  transparent: " dark:bg-transparent dark:text:white dark:hover:bg-[#8b8b8b89]",

};

// Define button types
export const btTypes = {
  standard: " px-4 py-2 rounded w-auto cursor-pointer",
  scale: " transition-transform duration-150 hover:scale-110"
}

// Define custom themes
// This is used in the theme switcher and for styling components
export const themes = {
  blueYellowBlack: {
    gradient: " bg-gradient-to-br from-[#3758eb] to-[#617aec] dark:from-[#18181b] dark:to-[#27272a]",
    itemGradient: " bg-gradient-to-br from-[#3758eb] to-[#617aec] dark:from-[#232526] dark:to-[#414345]",
    titleText: " text-[#b3f7eb] dark:text-yellow-400",
    bottomText: " text-[#e7e5e5] dark:text-yellow-300",
    mainText: " text-[#fff] dark:text-yellow-100",
    border: " border-[#7a96f1] dark:border-yellow-400",
    hoverGradient: " hover:from-[#617aec] hover:to-[#3758eb] hover:text-[#fff] dark:hover:from-[#414345] dark:hover:to-[#232526] dark:hover:text-yellow-300",
    overlay: " bg-black/60 dark:bg-black/80 z-40",
    hover: " hover:bg-blue-400 hover:text-[#e4f0eah] dark:hover:bg-yellow-400 dark:hover:text-[#232526]",
    icon: " text-[#fff] dark:text-[#FFD700]",
    
    // this tooltip styles are used in the Tooltip component that does not support tailwind classes
    tooltipBg: "#fff",
    tooltipBgDark: "#232526",
    tooltipText: "#000",
    tooltipTextDark: "#f0f0f0",
  },
};