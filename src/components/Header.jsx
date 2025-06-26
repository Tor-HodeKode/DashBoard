import { Button } from "@/components/ui/button";
import path from "@/assets/FileManager.js";
import { setStoredMode } from "@/util/localStorage.js";
import Language from "./ui/Language";
import { btTypes, useIsDarkMode } from "@/styles/globalStyle";

const [darkIcon, lightIcon] = path("icons", ["Dark.svg", "Light.svg"]);

const Header = () => {
  const isDark = useIsDarkMode();

  const toggleTheme = () => {
    const classList = document.documentElement.classList;
    if (isDark) {
      classList.remove("dark");
      setStoredMode(false);
    } else {
      classList.add("dark");
      setStoredMode(true);
    }
  }
  const themeIcon = isDark ? (
    <img src={lightIcon} alt="Light Mode" />
  ) : (
    <img src={darkIcon} alt="Dark Mode" />
  );

  const scale = btTypes.scale;
  const styles = {
    container: "w-full grid grid-cols-[1fr_1fr_1fr] gap-4",
    cLeft: "flex flex-row items-center justify-start",
    subLeft: "flex items-center mx-auto",
    cCenter: "flex items-center justify-center",
    cRight: "flex items-center justify-end",
    bTheme: "py-5 px-1 outline-none border-0 rounded-full bg-transparent shadow-none hover:cursor-pointer dark:hover:bg-[#8b8b8b89] transition-colors duration-300"
    + " " + scale,
    lang: "flex items-center justify-end mr-7",
    bell: "mr-4 cursor-pointer outline-none" + " " + scale,
  };

  return (
    <div className={styles.container}>
      <div className={styles.cLeft}>
        {/* Eksempel: Brukeravatar */}
        <div className={styles.subLeft}>
            <img
              src="#"
              alt="Bruker"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-medium"></span>
        </div>
      </div>
      <div className={styles.cCenter}></div>
      <div className={styles.cRight}>
        {/* Eksempel: Varsel-ikon */}
        <div className={styles.lang}>
          <Language />
        </div>
        <button className={styles.bell}>
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
