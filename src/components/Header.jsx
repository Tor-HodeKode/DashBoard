import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import path from "@/assets/FileManager.js";
import { getStoredTheme, setStoredTheme } from "@/util/localStorage.js";

const [darkIcon, lightIcon] = path("icons", ["Dark.svg", "Light.svg"]);

const Header = () => {
  const [isDark, setIsDark] = useState(getStoredTheme);

  useEffect(() => {
    const classList = document.documentElement.classList;
    if (isDark) {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
    setStoredTheme(isDark);

    const observer = new MutationObserver(() => {
      setIsDark(classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const themeIcon = isDark ? (
    <img src={lightIcon} alt="Light Mode" />
  ) : (
    <img src={darkIcon} alt="Dark Mode" />
  );

  const styles = {
    container: "w-full grid grid-cols-[1fr_1fr_1fr] gap-4",
    cLeft: "flex items-center justify-start",
    cCenter: "flex items-center justify-center",
    cRight: "flex items-center justify-end outline-none border-0",
    bTheme:
      "py-5 px-1 outline-none border-0 rounded-full bg-transparent shadow-none hover:cursor-pointer dark:hover:bg-[#8b8b8b89] transition-colors duration-300",
  };

  return (
    <div className={styles.container}>
      <div className={styles.cLeft}>
        {/* Eksempel: Brukeravatar */}
        <img
          src="/path/to/avatar.png"
          alt="Bruker"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="font-medium">Ola Nordmann</span>
      </div>
      <div className={styles.cCenter}></div>
      <div className={styles.cRight}>
        {/* Eksempel: Varsel-ikon */}
        <button className="mr-4">
          <span role="img" aria-label="Varsler">
            🔔
          </span>
        </button>
        <Button className={styles.bTheme} onClick={toggleTheme}>
          {themeIcon}
        </Button>
      </div>
    </div>
  );
};

export default Header;
