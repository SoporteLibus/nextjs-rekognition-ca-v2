import { useState } from "react";
import style from '../style/editdetailmodal.module.css'

const buttonWidth = 64;
const tabWidth = 300;
const tabHeaders = ["home", "lock", "settings"];
const tabContent = [];

const Widget = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            translate: `${activeIndex ? activeIndex * buttonWidth : 0}px 0`,
          }}
        ></div>
      </header>
      <div className={style.content}>
        <div
          className={style.contentinner}
          style={{
            translate: `-${activeIndex ? activeIndex * tabWidth : 0}px 0`,
          }}
        >
          <div>
            <h2 className={style.h2}>Home</h2>
            <p className={style.p}>
              This is the tab content, you can put anything you like in here.
            </p>
          </div>
          <div>
            <h2 className={style.h2}>Account</h2>
            <p className={style.p}>
              This is the tab content, you can put anything you like in here.
            </p>
          </div>
          <div>
            <h2 className={style.h2}>Settings</h2>
            <p className={style.p}>
              This is the tab content, you can put anything you like in here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget