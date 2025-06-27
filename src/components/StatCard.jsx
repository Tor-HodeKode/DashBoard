import React from "react";

// Selve StatCard-komponenten
export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-gradient-to-br from-[#232526] to-[#414345] dark:from-[#18181b] dark:to-[#27272a] rounded-xl shadow p-6 flex flex-col items-center justify-center min-w-[140px]">
      {icon && <div className="mb-2 text-3xl">{icon}</div>}
      <div className="text-yellow-400 text-lg font-semibold">{title}</div>
      <div className="text-2xl font-bold text-yellow-100">{value}</div>
    </div>
  );
}
