import { Logo } from "../Logo";
import styles from './Header.module.css'
export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <ul className={styles.navigation}>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </ul>
    </header>
  )
}