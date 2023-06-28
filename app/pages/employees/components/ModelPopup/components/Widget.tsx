import React, { useState } from "react";
import style from '../style/editdetailmodal.module.css'

declare var window: any

const buttonWidth = 185;
const buttonWidthMobile = 130;
const tabWidth = 608;
const tabWidthMobile = 393;

interface WidgetProps {
    children: React.ReactNode
    tabHeaders: string[]
}

const Widget: React.FC<WidgetProps> = ({children, tabHeaders}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const width: number = window.innerWidth;

  return (
    <div className={style.widget}>
      <header>
        {tabHeaders.map((tab, index) => (
        <button
            type="button"
            onClick={() => setActiveIndex(index)}
            key={tab}
            className={`${
              activeIndex === index ? style.active : ""
            }`}
          >
            {tab}
          </button>
        ))}
        <div
          className={style.underline}
          style={{
            translate: `${(activeIndex && width > 393) ? 
              activeIndex * buttonWidth : 
              (activeIndex && width <= 393) ? 
              activeIndex * buttonWidthMobile : 
              0}px 0`,
          }}
        ></div>
      </header>
      <div className={style.content}>
        <div
          className={style.contentinner}
          style={{
            translate: `-${(activeIndex && width > 393) ? 
              activeIndex * tabWidth : 
              (activeIndex && width <= 393) ? 
              activeIndex * tabWidthMobile : 
              0}px 0`,
          }}>
            {children}
        </div>
      </div>
    </div>
  );
};

export default Widget