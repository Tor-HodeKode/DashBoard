import { base_url as base } from "../../config.js";

const filePaths = {
    // background: "/images/background",
    icons: "/images/icons",
    // logo: "/images/logo",
    nb: "/lang/nb",
    en: "/lang/en",
};

const getFilePath = (folderKey, fileName) => {
    const folderPath = filePaths[folderKey];
    if (!folderPath) {
        console.error(`Invalid folder key: ${folderKey}`);
        return "";
    }
    return `${base}${folderPath}/${encodeURIComponent(fileName)}`;
};

const path = (folderKey, fileNames) => fileNames.map(fileName => getFilePath(folderKey, fileName));

export default path;

// Use examples:
// import path from '@/assets/FileManager.js';
// const images = path("background", ["image1.jpg"]);
// const icons = path("icons", ["icon1.png", "icon2.png"]);