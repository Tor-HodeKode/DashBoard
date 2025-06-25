import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import path from "./FileManager";

const getLanguage = (lngs, namespaces) => {
  const lng = Array.isArray(lngs) ? lngs[0] : lngs;
  const ns = Array.isArray(namespaces) ? namespaces[0] : namespaces;
  return path(lng, [`${ns}.json`])[0];
}

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: false,
    ns: ["sidebar"],
    defaultNS: "sidebar",
    interpolation: { escapeValue: false },
    backend: {
      loadPath: getLanguage
    }
  });

export default i18n;