import React, { useState } from "react";
import { Link } from "react-router-dom";
import { themes } from "@/styles/globalStyle";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const yb = themes.yellowBlack;

  // Kryss-ikon (close)
  const crossIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <line x1="6" y1="6" x2="18" y2="18" stroke="#FFD700" strokeWidth="2" />
      <line x1="6" y1="18" x2="18" y2="6" stroke="#FFD700" strokeWidth="2" />
    </svg>
  );
  // Hamburger-ikon (open)
  const hamburgerIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="16" height="2" rx="1" fill="#FFD700" />
      <rect x="4" y="11" width="16" height="2" rx="1" fill="#FFD700" />
      <rect x="4" y="16" width="16" height="2" rx="1" fill="#FFD700" />
    </svg>
  );

  const texts = {
    header: "Yerp",
    dashboard: "Dashboard",
    myDashBoards: "Mine Dashboards",
    addApi: "Legg til API",
    addWidget: "Legg til Widget",
    settings: "Innstillinger",
    loggedInAs: "Logget inn som: bruker@email.com",
    openMenu: "Åpne meny",
    closeMenu: "Lukk meny",
  };

  const navItems = [
    { name: texts.dashboard, to: "#" },
    { name: texts.myDashBoards, to: "#" },
    { name: texts.addApi, to: "#" },
    { name: texts.addWidget, to: "#" },
    { name: texts.settings, to: "#" },
  ];

  const styles = {
    sidebarContainer: "w-auto",
    hamburgerBtn: "fixed top-4 left-4 z-50 p-2 rounded-full shadow-lg focus:outline-none flex flex-col justify-center items-center w-12 h-12 border-2 transition"
      + yb.gradient + yb.textStandard + yb.border + yb.hoverGradient,
    overlay: "fixed inset-0 z-40" + yb.overlay,
    sidebar: "fixed top-0 left-0 h-full w-72 flex flex-col p-6 space-y-4 z-50 transform transition-transform duration-300 shadow-2xl border-r-2"
      + yb.gradient + yb.darkGradient + yb.textLight + yb.border,
    navContainer: "flex flex-col gap-3",
    navLink: "p-3 rounded-lg transition font-semibold" + yb.hover,
    h1: "text-3xl font-extrabold mb-8 tracking-wide drop-shadow" + yb.textStandard,
    bottomText: "mt-auto text-sm italic" + yb.textDim,
  };

  return (
    <div className={styles.sidebarContainer}>
      {/* Åpne/lukke knapp med hamburger/kryss */}
      <button
        className={styles.hamburgerBtn}
        onClick={() => setOpen(!open)}
        aria-label={open ? texts.closeMenu : texts.openMenu}
      >
        {/* Vis kryss-ikon hvis åpen, ellers hamburger-ikon */}
        {open ? crossIcon : hamburgerIcon}
      </button>
      {/* Overlay */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${ open ? "translate-x-0" : "-translate-x-full" }`}>
        <h1 className={styles.h1}>{texts.header}</h1>
        <nav className={styles.navContainer}>
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className={styles.bottomText}>{texts.loggedInAs}</div>
      </aside>
    </div>
  );
}