import React from "react";
import { themes } from "@/styles/globalStyle";

const Footer = () => (
  <>
    <style>{`
      footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        margin: 0;
        padding: 15px 0;
        border-top: 1px solid;
        z-index: -1;
      }
    `}</style>
    <footer
      className={`${themes.yellowBlack.gradient} ${themes.yellowBlack.textStandard} ${themes.yellowBlack.border} text-center text-sm`}
    >
      test
    </footer>
  </>
);

export default Footer;
