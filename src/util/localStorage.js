const THEME_KEY = "theme";

export function setStoredMode(isDark) {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
}