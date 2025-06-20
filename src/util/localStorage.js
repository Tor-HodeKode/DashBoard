const THEME_KEY = "theme";

export function getStoredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return document.documentElement.classList.contains("dark");
}

export function setStoredTheme(isDark) {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
}