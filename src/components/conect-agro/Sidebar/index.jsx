import { SidebarIcon } from "./SidebarIcon";
import { User, ShoppingBag, Star } from "phosphor-react"
import styles from './Sidebar.module.css'

const sidebarPageInfo = [
  {
    title: 'Meu Perfil',
    href: '#',
    icon: <User size={28}/>
  },
  {
    title: 'Meus Favoritos',
    href: '#',
    icon: <Star size={28}/>
  },
  {
    title: 'Transações',
    href: '#',
    icon: <ShoppingBag size={28}/>
  },
]

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.linkList}>
        {sidebarPageInfo.map((link, index) => {
          return (
            <li key={index}>
              <SidebarIcon title={link.title} href={link.href}>
                {link.icon}
              </SidebarIcon>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}