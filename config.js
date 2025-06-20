// Base URL configuration for different environments
const isDevelopment = process.env.NODE_ENV === 'development';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

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