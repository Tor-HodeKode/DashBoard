import React from "react";
import { themes } from "@/styles/globalStyle";

const Footer = ({ themeName }) => {
  const theme = themes[themeName];
  const styles = {
    container: "w-full m-0 py-[15px] border-t border-solid z-[-1] text-center text-sm" 
    + theme.mainText + theme.border + theme.gradient + theme.bottomText,
  };

  return (
    <>
      <div className={styles.container}>
        test
      </div>
    </>
  );
};

export default Footer;
