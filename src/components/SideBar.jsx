import React, { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Åpne/lukke knapp med hamburger/kryss */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded focus:outline-none flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Lukk meny" : "Åpne meny"}
      >
        {open ? (
          // Kryss-ikon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="6"
              y1="18"
              x2="18"
              y2="6"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        ) : (
          // Hamburger-ikon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="6" width="16" height="2" rx="1" fill="white" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="white" />
            <rect x="4" y="16" width="16" height="2" rx="1" fill="white" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col p-4 space-y-4 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-2xl font-bold mb-6">DashNav</h1>
        <nav className="flex flex-col gap-2">
          <a href="#" className="hover:bg-gray-700 p-2 rounded transition">
            Dashboard
          </a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded transition">
            Mine Dashboards
          </a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded transition">
            Legg til API
          </a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded transition">
            Legg til Widget
          </a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded transition">
            Innstillinger
          </a>
        </nav>
        <div className="mt-auto text-sm text-gray-400">
          Logget inn som: bruker@email.com
        </div>
      </aside>
    </>
  );
}
