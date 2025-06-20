// Base URL configuration for different environments

// Handle both server-side (vite.config.js) and client-side (browser) environments
const isServer = typeof window === 'undefined';
const isDevelopment = isServer 
  ? process.env.NODE_ENV === 'development'
  : import.meta.env.DEV;
const isGitHubPages = isServer 
  ? process.env.VITE_GITHUB_PAGES === 'true'
  : import.meta.env.VITE_GITHUB_PAGES === 'true';

// For development, use root path
// For GitHub Pages deployment, use the repository name
// For other production deployments, adjust as needed
export const base_url = isDevelopment 
  ? "/" 
  : isGitHubPages 
    ? "/DashBoard/"  // Note the trailing slash for GitHub Pages
    : "/DashBoard/";

// Alternative: You can also set this via environment variable
// export const base_url = process.env.VITE_BASE_URL || "/DashBoard/";