import "./styles/App.css";
import React from "react";
import { Button } from "@/components/ui/button.jsx";
import SideBar from "./components/SideBar.jsx";


const styles = {
  app: "grid grid-cols-[200px_1fr] grid-rows-[auto_1fr_auto] min-h-screen p-3",
  header: "col-span-2 row-start-1 row-end-2 flex items-center justify-center",
  sidebar: "row-start-1 row-end-4 col-start-1 col-end-2",
  main: "row-start-2 row-end-3 col-start-2 col-end-3 flex justify-center",
  footer: "col-span-2 row-start-3 row-end-4 flex items-center justify-center",
}

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Header</h1>
      </header>
      <aside className={styles.sidebar}>
        <SideBar />
      </aside>
      <main className={styles.main}>
        <Button>Works</Button>
      </main>
      <footer className={styles.footer}>
        <p>Footer content goes here.</p>
      </footer>
    </div>
    
  );
}

export default App;
