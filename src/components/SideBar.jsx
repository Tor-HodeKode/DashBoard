import React, { useState } from "react";
import { Link } from "react-router-dom";

import { tints, tintsDark } from "@/styles/globalStyle";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  // Kryss-ikon (close)
  const crossIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" />
      <line x1="6" y1="18" x2="18" y2="6" stroke="white" strokeWidth="2" />
    </svg>
  );
  // Hamburger-ikon (open)
  const hamburgerIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="16" height="2" rx="1" fill="white" />
      <rect x="4" y="11" width="16" height="2" rx="1" fill="white" />
      <rect x="4" y="16" width="16" height="2" rx="1" fill="white" />
    </svg>
  );
  
  const texts = {
    dashboard: "DashBoard",
    myDashBoards: "Mine Dashboards",
    addApi: "Legg til API",
    addWidget: "Legg til Widget",
    settings: "Innstillinger",
    loggedInAs: "Logget inn som: bruker@email.com",
    openMenu: "Åpne meny",
    closeMenu: "Lukk meny",
  }

  const navItems = [
    { name: texts.dashboard, to: "/home"},
    { name: texts.myDashBoards, to: "#"},
    { name: texts.addApi, to: "#"},
    { name: texts.addWidget, to: "#"},
    { name: texts.settings, to: "#"},
  ];

  const styles = {
    sidebarContainer: "width-auto",
    hamburgerBtn: "z-50 p-2 rounded flex flex-col justify-center items-center w-10 h-10 cursor-pointer" + tints.blue + tintsDark.transparent,
    overlay: " fixed inset-0 bg-transparent z-40",
    sidebar: " fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col p-4 space-y-4 z-50 transform transition-transform duration-300",
    navContainer: " flex flex-col gap-2",
    navLink: " hover:bg-gray-700 p-2 rounded transition",
    h1: " text-2xl font-bold mb-6",
    bottomText: " mt-auto text-sm text-gray-400",
  }

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
        <div className={styles.overlay} onClick={() => setOpen(false)}/>
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <h1 className={styles.h1}>DashNav</h1>
        <nav className={styles.navContainer}>
          { navItems.map(({ name, to }) => (
            <Link key={name} to={to} className={styles.navLink} onClick={() => setOpen(false)}>
              {name}
            </Link>
          )) }
        </nav>
        <div className={styles.bottomText}>
          {texts.loggedInAs}
        </div>
      </aside>
    </div>
  );
}