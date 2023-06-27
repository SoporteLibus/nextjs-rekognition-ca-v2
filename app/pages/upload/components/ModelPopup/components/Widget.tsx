import React from "react";
import style from '../style/editdetailmodal.module.css'

let width = window.innerWidth
const tabWidth = 576;
const tabWidthMobile = 376;

interface WidgetProps {
  children: React.ReactNode;
}

const Widget: React.FC<WidgetProps> = ({children}) => {
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