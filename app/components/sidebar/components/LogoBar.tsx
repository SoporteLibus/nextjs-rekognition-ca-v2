import Image from "next/image"
import argullogo from '@/public/logo2.png'
import styles from '@/app/styles/sidebar.module.css'

const LogoBar = () => {
  return (
    <div className={styles.logosidebar}>
      <Image src={argullogo}
        height={25}
        width={25}
        alt='Argul logo'
        priority={true}
      />
    </div>
  )
}

export default LogoBar;