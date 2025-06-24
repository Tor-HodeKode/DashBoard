import React, { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Åpne/lukke knapp med hamburger/kryss */}
      <button
        className="fixed top-4 left-4 z-50 bg-gradient-to-br from-[#232526] to-[#414345] text-yellow-400 p-2 rounded-full shadow-lg focus:outline-none flex flex-col justify-center items-center w-12 h-12 border-2 border-yellow-400 hover:from-[#414345] hover:to-[#232526] hover:text-yellow-300 transition"
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
              stroke="#FFD700"
              strokeWidth="2"
            />
            <line
              x1="6"
              y1="18"
              x2="18"
              y2="6"
              stroke="#FFD700"
              strokeWidth="2"
            />
          </svg>
        ) : (
          // Hamburger-ikon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="6" width="16" height="2" rx="1" fill="#FFD700" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="#FFD700" />
            <rect x="4" y="16" width="16" height="2" rx="1" fill="#FFD700" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 dark:bg-black/80 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-br from-[#232526] to-[#414345] dark:from-[#18181b] dark:to-[#27272a] text-yellow-100 flex flex-col p-6 space-y-4 z-50 transform transition-transform duration-300 shadow-2xl border-r-2 border-yellow-400 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-extrabold mb-8 text-yellow-400 tracking-wide drop-shadow">
          Yerp
        </h1>
        <nav className="flex flex-col gap-3">
          <a
            href="#"
            className="hover:bg-yellow-400 hover:text-[#232526] p-3 rounded-lg transition font-semibold"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="hover:bg-yellow-400 hover:text-[#232526] p-3 rounded-lg transition font-semibold"
          >
            Mine Dashboards
          </a>
          <a
            href="#"
            className="hover:bg-yellow-400 hover:text-[#232526] p-3 rounded-lg transition font-semibold"
          >
            Legg til API
          </a>
          <a
            href="#"
            className="hover:bg-yellow-400 hover:text-[#232526] p-3 rounded-lg transition font-semibold"
          >
            Legg til Widget
          </a>
          <a
            href="#"
            className="hover:bg-yellow-400 hover:text-[#232526] p-3 rounded-lg transition font-semibold"
          >
            Innstillinger
          </a>
        </nav>
        <div className="mt-auto text-sm text-yellow-300 italic">
          Logget inn som: bruker@email.com
        </div>
      </aside>
    </>
  );
}
