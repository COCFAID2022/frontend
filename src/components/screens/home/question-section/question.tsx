'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import { Title } from '@/components/common/title';
import { Typography } from '@/components/ui/typography';
import minus from '@/icons/minus.svg';
import plus from '@/icons/plus.svg';

import style from './question.module.scss';
import { questionItem } from './question-item';

export const Question = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const clickHandler = (index: number) => {
    if (expandedItems.includes(index)) {
      // Якщо елемент вже розгорнуто, видаляємо його із списку розгорнутих
      setExpandedItems(expandedItems.filter(item => item !== index));
    } else {
      // Якщо елемент не розгорнуто, додаємо його до списку розгорнутих
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <section className={classNames('container')}>
      <div className={style.container}>
        <Title href={'/help'} text={'Питання'} className={style.title} />
        <Typography
          fontWeight={'regular'}
          element={'h5'}
          className={style.marginHr}>
          Головні питання
        </Typography>
      </div>
      <ul className={style.list}>
        {questionItem.map((item, index) => (
          <li className={style.item} key={item.id}>
            <button
              type={'button'}
              className={style.question}
              onClick={() => clickHandler(index)}>
              {item.question}
              <Image
                src={expandedItems.includes(index) ? minus : plus}
                alt={expandedItems.includes(index) ? 'minus' : 'plus'}
              />
            </button>
            <div
              className={style.accordion}
              style={{
                maxHeight: expandedItems.includes(index) ? '1000px' : '0',
              }}>
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
