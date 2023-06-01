import { CardItems, CardList } from '@/app/types';
import style from '../../style/cards.module.css'
import React from 'react';
import { useRouter } from 'next/navigation';

const CardComponent: React.FC<CardList> = ({ numbers, text, icon, link }) => {
  const router = useRouter()
  return (
    <div className={style.card} onClick={() => router.push(`${link}`)}>
      <div className={style.iconBx}>{icon}</div>
      <div>
        <div className={style.numbers}>{numbers}</div>
        <div className={style.cardName}>{text}</div>
      </div>
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
            link={item.link}
          />
        ))}
    </div>
  );
};

export default Card;