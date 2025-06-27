const THEME_KEY = "theme";

export function setStoredMode(mode) {
    localStorage.setItem(THEME_KEY, mode);
}

export function getStoredMode() {
    return localStorage.getItem(THEME_KEY);
}