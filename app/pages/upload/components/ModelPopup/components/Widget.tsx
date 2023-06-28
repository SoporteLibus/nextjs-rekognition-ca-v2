import React from "react";
import style from '../style/editdetailmodal.module.css'

declare var window: any

const tabWidth = 576;
const tabWidthMobile = 376;

interface WidgetProps {
  children: React.ReactNode;
}

const Widget: React.FC<WidgetProps> = ({ children }) => {
  const width: number = window.innerWidth;
  
  return (
    <div className={style.widget}>
      <div className={style.content}>
        <div
          className={style.contentinner}
          style={{
            width: `${(width <= 393) ? 
              tabWidthMobile : tabWidth}`
          }}>
            {children}
        </div>
      </div>
    </div>
  );
};

export default Widget