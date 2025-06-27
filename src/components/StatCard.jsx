import React from "react";
import { themes, cn } from "@/styles/globalStyle";

// Selve StatCard-komponenten
export default function StatCard({ title, value, icon, themeName }) {
  const theme = themes[themeName] || themes.default;
  return (
    <div className={cn(theme.itemGradient, "rounded-xl shadow p-6 flex flex-col items-center justify-center min-w-[140px]")}>
      {icon && <div className="mb-2 text-3xl">{icon}</div>}
      <div className="text-yellow-400 text-lg font-semibold">{title}</div>
      <div className="text-2xl font-bold text-yellow-100">{value}</div>
    </div>
  );
}
