"use client"
import styles from '@/styles/sidebar.module.css'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { MenuItemProps, MenuProps } from '../../types';
import argullogo from '../../../public/logo2.png'
import Image from 'next/image';
import Link from 'next/link';

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, link }) => {
  return (
    <li>
      <Link href={link}> 
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{text}</span>
      </Link>
    </li>
  );
};

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

const SideBar: React.FC<MenuProps> = ({ children, items }) => {
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
          <Link href='/'>
            <span className={styles.icon}><LogoBar /></span>
            <span className={styles.titlelogo}>Argul y Cia</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            text={item.text}
            link={item.link}
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

        <div className={styles.search}>
            <label>
              <input type="text" placeholder="Search here" />
              <button className={styles.searchbtn}><AiOutlineSearch /></button>
            </label>
        </div>

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