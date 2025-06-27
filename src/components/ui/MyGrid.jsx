import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const layout = [
  { i: "a", x: 0, y: 0, w: 2, h: 2 },
  { i: "b", x: 2, y: 0, w: 2, h: 2 },
  { i: "c", x: 4, y: 0, w: 2, h: 2 },
];

export default function MyGrid() {
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={6}
      rowHeight={60}
      width={800}
    >
      <div
        key="a"
        className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl shadow text-yellow-200 flex items-center justify-center text-lg font-bold"
      >
        Widget A
      </div>
      <div
        key="b"
        className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl shadow text-yellow-200 flex items-center justify-center text-lg font-bold"
      >
        Widget B
      </div>
      <div
        key="c"
        className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-xl shadow text-yellow-200 flex items-center justify-center text-lg font-bold"
      >
        Widget C
      </div>
    </GridLayout>
  );
}
