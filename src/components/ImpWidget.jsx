import React, { createContext, useContext, useState } from "react";
export const WidgetContext = createContext();
export function useWidgets() { return useContext(WidgetContext); }
export function WidgetProvider({ children }) {
  const [widgets, setWidgets] = useState([]);
  return (
    <WidgetContext.Provider value={{ widgets, setWidgets }}>
      {children}
    </WidgetContext.Provider>
  );
}