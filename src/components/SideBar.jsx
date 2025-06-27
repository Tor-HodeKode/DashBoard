import { useState } from "react";
import { Link } from "react-router-dom";
import { themes } from "@/styles/globalStyle";
import { useTranslation } from "react-i18next";
import "@/assets/i18n";
import { useWidgets } from "./ImpWidget";

export default function SideBar({ themeName}) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("sidebar");
  const theme = themes[themeName];
  const { setWidgets } = useWidgets();

  const user = "bruker@email.com";

  const texts = {
    header: t("header"),
    dashboard: t("dashboard"),
    myDashBoards: t("myDashBoards"),
    addApi: t("addApi"),
    addWidget: t("addWidget"),
    settings: t("settings"),
    loggedInAs: t("loggedInAs") + user,
    openMenu: t("openMenu"),
    closeMenu: t("closeMenu"),
  };

  const navItems = [
    { name: texts.dashboard, to: "/dashboard" },
    { name: texts.myDashBoards, to: "#" },
    { name: texts.addApi, to: "#" },
    {
      name: texts.addWidget,
      action: () =>
        setWidgets((prev) => [
          ...prev,
          { type: "EloChart", id: Date.now() },
        ]),
    },
    { name: texts.settings, to: "#" },
  ];

  const styles = {
    sidebarContainer: "w-auto [&_*:focus]:outline-none",
    hamburgerBtn:
      "fixed top-4 left-4 z-50 p-2 rounded-full shadow-lg focus:outline-none flex flex-col justify-center items-center w-12 h-12 border-2 transition cursor-pointer " +
      theme.gradient +
      theme.mainText +
      theme.border +
      theme.hoverGradient,
    overlay: "fixed inset-0 z-40 " + theme.overlay,
    sidebar:
      "fixed top-0 left-0 h-full w-72 flex flex-col p-6 space-y-4 z-50 transform transition-transform duration-300 shadow-2xl border-r-2 " +
      theme.gradient +
      theme.darkGradient +
      theme.mainText +
      theme.border,
    navContainer: "flex flex-col gap-3",
    navLink: "p-3 rounded-lg transition font-semibold cursor-pointer" + theme.hover,
    h1:
      "text-3xl font-extrabold mb-8 tracking-wide drop-shadow cursor-pointer" +
      theme.titleText,
    bottomText: "mt-auto text-sm italic text-center" + theme.bottomText,
  };

  // SVG Icons
  const crossIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const hamburgerIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
      <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
      <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
    </svg>
  );

  return (
    <div className={styles.sidebarContainer}>
      {/* Hamburger / Cross button */}
      <button
        className={styles.hamburgerBtn + theme.icon}
        onClick={() => setOpen(!open)}
        aria-label={open ? texts.closeMenu : texts.openMenu}
      >
        {open ? crossIcon : hamburgerIcon}
      </button>

      {/* Overlay */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`${styles.sidebar} ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to={"/home"} onClick={() => setOpen(false)}>
          <h1 className={styles.h1}>{texts.header}</h1>
        </Link>
        <nav className={styles.navContainer}>
          {navItems.map(({ name, to, action }) => (
            <button
              key={name}
              className={styles.navLink}
              onClick={() => {
                setOpen(false);
                if (action) action();
              }}
            >
              {to ? <Link to={to}>{name}</Link> : name}
            </button>
          ))}
        </nav>

        <div className={styles.bottomText}>{texts.loggedInAs}</div>
      </aside>
    </div>
  );
}
