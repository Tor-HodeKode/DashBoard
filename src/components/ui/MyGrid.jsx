import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useWidgets } from "../../context/WidgetContext";
import EloChart from "../EloChart";
import StatCard from "../StatCard";
import { themes, cn } from "@/styles/globalStyle";

const layout = [
  { i: "a", x: 0, y: 0, w: 2, h: 2 },
  { i: "b", x: 2, y: 0, w: 2, h: 2 },
  { i: "c", x: 4, y: 0, w: 2, h: 2 },
];

export default function MyGrid({ nickname, playerStats, themeName }) {
  const { widgets } = useWidgets();
  const theme = themes[themeName] || themes.default;

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={6}
      rowHeight={60}
      width={800}
    >
      {widgets.map((widget) => (
        <div
          key={widget.id}
          className={cn( theme.itemGradient , "rounded-xl shadow flex items-center justify-center")}
        >
          {widget.type === "EloChart" && <EloChart nickname="s1mple" />}
          {widget.type === "StatCard" && (
            <StatCard title="ELO" value={1500} icon="📈" />
          )}
          {/* flere widgets */}
        </div>
      ))}
    </GridLayout>
  );
}
