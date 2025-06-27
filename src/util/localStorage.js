const THEME_KEY = "theme";

export function setStoredMode(isDark) {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
}

export function getStoredMode() {
    return localStorage.getItem(THEME_KEY);
}