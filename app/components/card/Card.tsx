import { CardItems, CardList } from '@/app/types';
import style from '@/app/styles/cards.module.css'
import React from 'react';

const CardComponent: React.FC<CardList> = ({numbers, text, icon}) => {
  return (
    <div className={style.card}>
      <div>
        <div className={style.numbers}>{numbers}</div>
        <div className={style.cardName}>{text}</div>
      </div>

      <div className={style.iconBx}>{icon}</div>
    </div>
  )
}

const Card: React.FC<CardItems> = ({items}) => {
  return (
    <div className={style.cardBox}>
        {items.map((item, index) => (
          <CardComponent
            key={index}
            icon={item.icon}
            text={item.text}
            numbers={item.numbers}
          />
        ))}
    </div>
  );
};

export default Card;