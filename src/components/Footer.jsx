import React from "react";
import { themes, cn } from "@/styles/globalStyle";

const Footer = ({ themeName = "dark" }) => {
  // Bruk "dark" som fallback hvis themeName mangler eller ikke finnes i themes
  const theme = themes[themeName] || themes["dark"];

  const styles = {
    container: cn(
      "w-full m-0 py-[15px] border-t border-solid z-[-1] text-center text-sm",
      theme.mainText,
      theme.border,
      theme.gradient,
      theme.bottomText
    ),
  };

  return (
    <div className={styles.container}>
      test
    </div>
  );
};

export default Footer;
