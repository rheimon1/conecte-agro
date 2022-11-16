import { Outlet } from "react-router-dom";
import { Header } from "../../components/conect-agro/Header";
import { Sidebar } from "../../components/conect-agro/Sidebar";
import styles from './Main.module.scss'

export function Main() {
  return (
    <>
      <Header />
      <div className={styles.defaultLayout}>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}