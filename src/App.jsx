import React from "react";
import "./styles/App.css";
import { AppSidebar } from "./components/app-sidebar.jsx";
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import { SiteHeader } from "./components/site-header";
import { SectionCards } from "./components/section-cards";
import { ChartAreaInteractive } from "./components/chart-area-interactive";
import { DataTable } from "./components/data-table";
import data from "./data.json";

// Deprecated
/* const styles = {
  app: "grid grid-cols-[200px_1fr] grid-rows-[auto_1fr_auto] min-h-screen p-3",
  header: "col-span-2 row-start-1 row-end-2 flex items-center justify-center",
  sidebar: "row-start-1 row-end-4 col-start-1 col-end-2",
  main: "row-start-2 row-end-3 col-start-2 col-end-3 flex justify-center",
  footer: "col-span-2 row-start-3 row-end-4 flex items-center justify-center",
} */

function App() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        }
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
