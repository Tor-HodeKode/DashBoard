import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/App.css";


const styles = {
  app: "grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] min-h-screen lg:grid-cols-[auto_1fr]",
  header: "col-span-2 row-start-1 row-end-2 flex items-center justify-center mb-3 p-3",
  sidebar: "row-start-1 row-end-4 col-start-1 col-end-2",
  main: "row-start-2 row-end-3 col-start-2 col-end-3 flex justify-center px-3",
  footer: "col-span-2 row-start-3 row-end-4 flex items-center justify-center",
}

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Header />
      </header>
      <aside className={styles.sidebar}>
        <SideBar themeName={"blueYellowBlack"}/>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer themeName={"blueYellowBlack"}/>
      </footer>
    </div>
  );
}

export default App;
