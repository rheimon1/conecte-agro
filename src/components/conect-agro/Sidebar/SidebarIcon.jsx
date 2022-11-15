import styles from './SidebarIcon.module.scss'

export function SidebarIcon(props){
  return (
    <a href={props.href} className={styles.link}>
      <span>
        {props.title}
      </span>
      {props.children}
    </a>
  )
}