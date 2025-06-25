const THEME_KEY = "theme";

export function getStoredMode() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return document.documentElement.classList.contains("dark");
}

export function setStoredMode(isDark) {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
}