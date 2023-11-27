'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import { Title } from '@/components/common/title';
import { Typography } from '@/components/ui/typography';

import minus from '../../../../../public/static/icons/minus.svg';
import plus from '../../../../../public/static/icons/plus.svg';
import style from './question.module.scss';
import { questionItem } from './question-item';

export const Question = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const clickHandler = (index: number) => {
    if (index === expandedItem) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
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
              {index === expandedItem ? (
                <Image src={minus} alt={'minus'} />
              ) : (
                <Image src={plus} alt={'plus'} />
              )}
            </button>
            <div
              className={
                index === expandedItem
                  ? classNames(style.accordion, style.open)
                  : classNames(style.accordion)
              }>
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
