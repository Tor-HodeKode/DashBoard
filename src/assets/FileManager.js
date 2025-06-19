import { base_url as base } from "../../config.js";

const filePaths = {
    // background: "/images/background",
    // icons: "/images/icons",
    // logo: "/images/logo",
};

export const getFilePath = (folderKey, fileName) => {
    const folderPath = filePaths[folderKey];
    if (!folderPath) {
        console.error(`Invalid folder key: ${folderKey}`);
        return "";
    }
    return `${base}${folderPath}/${encodeURIComponent(fileName)}`;
};

export const path = (folderKey, fileNames) => fileNames.map(fileName => getFilePath(folderKey, fileName));

// Use examples:
// const images = path("background", ["image1.jpg"]);
// const icons = path("icons", ["icon1.png", "icon2.png"]);