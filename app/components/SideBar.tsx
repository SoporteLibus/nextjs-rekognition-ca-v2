"use client"
import styles from '@/styles/sidebar.module.css'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { MenuItemProps, MenuProps } from '../types';

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, setHover, hover, link }) => {
  return (
    <li onMouseOver={() => setHover(!hover)} className={`${hover ? 'hovered' : ''}`} >
      <a href={link}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{text}</span>
      </a>
    </li>
  );
};

const SideBar: React.FC<MenuProps> = ({ children, items }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(true);

  const toggleHideText = () => {
    setHide(!hide);
  };
  return (
    <>
      {/* =============== Navigation ================ */}
    <div className={`${hide ? styles.navigationactive : styles.navigation}`}>
      <ul>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            text={item.text}
            setHover={setHover}
            hover={hover}
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
          <img src="/argulycia.jpg" alt="User image" />
        </div>
      </div>
      {children}
    </div>
    </>
  )
}
export default SideBar