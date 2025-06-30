import { getStoredMode, setStoredMode } from "@/util/localStorage";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------
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
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// Define tint style
export const tints = {
  blue: "bg-[#3758eb] text-white hover:bg-[#1c41e6]",
  red: "bg-[#e63946] text-white hover:bg-[#d62839]",
  green: "bg-[#2a9d8f] text-white hover:bg-[#21867a]",
  yellow: "bg-[#d9e710] text-black hover:bg-[#d6dd78]",
  purple: "bg-[#6c63ff] text-white hover:bg-[#4238fa]",
  orange: "bg-[#f77f00] text-white hover:bg-[#eeab64]",
};
export const tintsDark = {
  blue: "dark:bg-[#3758eb] dark:text-white dark:hover:bg-[#1c41e6]",
  red: "dark:bg-[#e63946] dark:text-white dark:hover:bg-[#d62839]",
  green: "dark:bg-[#2a9d8f] dark:text-white dark:hover:bg-[#21867a]",
  yellow: "dark:bg-[#d9e710] dark:text-black dark:hover:bg-[#d6dd78]",
  purple: "dark:bg-[#6c63ff] dark:text-white dark:hover:bg-[#4238fa]",
  orange: "dark:bg-[#f77f00] dark:text-white dark:hover:bg-[#eeab64]",
  white: "dark:bg-white dark:text-black dark:hover:bg-[#b4b4b4]",
  transparent: "dark:bg-transparent dark:text:white dark:hover:bg-[#8b8b8b89]",

};

// Define button types
export const btTypes = {
  standard: "px-4 py-2 rounded w-auto cursor-pointer",
  scale: "transition-transform duration-150 hover:scale-110"
}
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// Capitalize the first letter of a string
export function cap(str) {
  return str && str[0].toUpperCase() + str.slice(1);
}
// Capitalize the first letter of each word in a string
export function capW(str) {
  return str ? str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    : str;
}
// Convert the entire string to lowercase
export function low(str) {
  return str ? str.toLowerCase() : str;
}

// Utility function to concatenate class names with spaces
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// Helper function to get tooltip styles based on dark mode
export function getTooltipStyle(isDark, tooltipConfig) {
  return {
    background: isDark ? tooltipConfig.bgDark : tooltipConfig.bg,
    color: isDark ? tooltipConfig.textDark : tooltipConfig.text,
    borderRadius: "5px",
  };
}

// Common tooltip configurations that can be reused across themes
export const tooltipStyles = {
  default: {
    bg: "#fff",
    bgDark: "#232526", 
    text: "#000",
    textDark: "#f0f0f0",
  },
};
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// Define custom themes
// This is used in the theme switcher and for styling components
export const themes = {
  // default theme for fallback
  default: {
    gradient: "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
    itemGradient: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800",
    titleText: "text-gray-800 dark:text-gray-200",
    bottomText: "text-gray-600 dark:text-gray-400",
    mainText: "text-gray-900 dark:text-gray-100",
    border: "border-gray-300 dark:border-gray-600",
    hoverGradient: "hover:from-gray-200 hover:to-gray-100 hover:text-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-700 dark:hover:text-gray-100",
    overlay: "bg-black/50 dark:bg-black/70 z-40",
    hover: "hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100",
    icon: "text-gray-700 dark:text-gray-300",

    tooltip: tooltipStyles.default,
  }
  ,
  // blue theme on light mode, yellow black theme on dark mode
  blueYellowBlack: {
    gradient: "bg-gradient-to-br from-[#3758eb] to-[#617aec] dark:from-[#18181b] dark:to-[#27272a]",
    itemGradient: "bg-gradient-to-br from-[#3758eb] to-[#617aec] dark:from-[#232526] dark:to-[#414345]",
    titleText: "text-[#b3f7eb] dark:text-yellow-400",
    bottomText: "text-[#e7e5e5] dark:text-yellow-300",
    mainText: "text-[#fff] dark:text-yellow-100",
    border: "border-[#7a96f1] dark:border-yellow-400",
    hoverGradient: "hover:from-[#617aec] hover:to-[#3758eb] hover:text-[#fff] dark:hover:from-[#414345] dark:hover:to-[#232526] dark:hover:text-yellow-300",
    overlay: "bg-black/60 dark:bg-black/80 z-40",
    hover: "hover:bg-blue-400 hover:text-[#e4f0eah] dark:hover:bg-yellow-400 dark:hover:text-[#232526]",
    icon: "text-[#fff] dark:text-[#FFD700]",
    
    tooltip: tooltipStyles.default,
  },
};

// ----------------------------------------------------------------
// ----------------------------------------------------------------