"use client"
import styles from '@/app/styles/sidebar.module.css'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { MenuProps } from '../../types';
import Image from 'next/image';
import LogoBar from './components/LogoBar';
import MenuItem from './components/MenuItem';

declare var window: any

const SideBar: React.FC<MenuProps> = ({ children, items, setAuth }) => {
  const [hide, setHide] = useState<boolean>(true);

  const toggleHideText = () => { 
    setHide(!hide);
  };

  return (
    <>
      {/* =============== Navigation ================ */}
    <div className={`${hide ? styles.navigationactive : styles.navigation}`}>
      <ul>
        <li>
          <a href='#'>
            <span className={styles.icon} onClick={() => window.location.replace("/")}><LogoBar /></span>
            <span className={styles.titlelogo}>Argul y Cia</span>
          </a>
        </li>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            text={item.text}
            link={item.link}
            setAuth={setAuth}
          />
        ))}
      </ul>
    </div>
    {/* ========================= Main ==================== */}
    <div className={`${hide ? styles.mainactive : styles.main}`}>
      <div className={styles.topbar}>
        <button className={styles.toggle} onClick={() => toggleHideText()} >
          <AiOutlineMenu />
        </button>
        <div className={styles.user}>
          <Image
            src="/argulycia.jpg"
            alt="User image"
            width={25}
            height={25}
          />
        </div>
      </div>
      {children}
    </div>
    </>
  )
}
export default SideBar