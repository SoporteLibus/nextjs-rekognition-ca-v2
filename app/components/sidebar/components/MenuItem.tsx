import { MenuItemProps } from "@/app/types";
import Link from "next/link";
import styles from '@/styles/sidebar.module.css';
import { deleteCookie } from "cookies-next";

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, link, setAuth }) => {
  
  return (
    <li>
      {
        text == "Salir" ?
          <Link href={link} onClick={() => {
            deleteCookie("token")
            deleteCookie("user")
            setAuth && setAuth(false)
          }} > 
          <span className={styles.icon}>{icon}</span>
          <span className={styles.title}>{text}</span>
        </Link> :
        <Link href={link} > 
          <span className={styles.icon}>{icon}</span>
          <span className={styles.title}>{text}</span>
        </Link>
      }
    </li>
  )
};

export default MenuItem;