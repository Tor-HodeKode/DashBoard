import { useTranslation } from "react-i18next";
import path from "@/assets/FileManager";
import { btTypes, cn } from "@/styles/globalStyle";

const [ enIcon, noIcon ] = path("icons", [ "uk.svg", "no.svg" ]);

const languageNames = { en: "English", nb: "Norsk" };
const languageIcons = { en: enIcon, nb: noIcon };

function Language() {
    const { i18n } = useTranslation();
    const availableLangs = Object.keys(languageNames);
    const handleClick = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("i18nextLng", lng);
    }

    const scale = btTypes.scale;
    const styles = {
        container: "flex gap-2",
        button: "rounded transition outline-none",
        active: "opacity-60",
        inactive: "cursor-pointer",
        icon: cn("inline-block w-7 h-7 object-fit", scale),
    }
    return (
        <div className={styles.container}>
            {availableLangs.map((lng) => (
                <button 
                    key={lng}
                    onClick={() => handleClick(lng)}
                    disabled={i18n.language === lng}
                    className={cn(styles.button, (i18n.language === lng ? styles.active : styles.inactive))}
                >
                    <img src={languageIcons[lng]} alt={languageNames[lng]} className={styles.icon} />
                </button>
            ))}
        </div>
    )
}

export default Language;