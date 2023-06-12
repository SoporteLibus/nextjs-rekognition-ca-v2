import Image from "next/image"
import argullogo from '@/public/logo2.png'
import styles from '@/app/styles/sidebar.module.css'

const LogoBar = () => {
  return (
    <div className={styles.logosidebar}>
      <Image src={argullogo}
        height={35}
        width={35}
        alt='Argul logo'
        priority={true}
      />
    </div>
  )
}

export default LogoBar;