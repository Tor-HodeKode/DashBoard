import React from "react";
import { themes } from "@/styles/globalStyle";

export default function StatCard({ title, value, icon, themeName }) {
  const theme = themes[themeName];
  return (
    <div className={ theme.gradient + " rounded-xl shadow p-6 flex flex-col items-center justify-center min-w-[140px]"} >
      {icon && <div className="mb-2 text-3xl">{icon}</div>}
      <div className={ theme.titleText + " text-lg font-semibold"}>{title}</div>
      <div className={ theme.mainText + " text-2xl font-bold"}>{value}</div>
    </div>
  );
}