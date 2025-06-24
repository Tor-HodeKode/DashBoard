import { Hamburger } from "lucide-react";

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

export const btTypes = {
  standard: " px-4 py-2 rounded w-auto cursor-pointer",
}

export const themes = {
  yellowBlack: {
    gradient: " bg-gradient-to-br from-[#232526] to-[#414345]",
    darkGradient: " dark:from-[#18181b] dark:to-[#27272a]", 
    textStandard: " text-yellow-400",
    textDim: " text-yellow-300",
    textLight: " text-yellow-100",
    border: " border-yellow-400",
    hoverGradient: " hover:from-[#414345] hover:to-[#232526] hover:text-yellow-300",
    overlay: " bg-black/60 dark:bg-black/80 z-40",
    hover: " hover:bg-yellow-400 hover:text-[#232526]"
  },
};