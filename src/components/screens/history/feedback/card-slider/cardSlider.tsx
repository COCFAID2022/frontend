import { FC } from 'react';

import { FeedbackType } from '../types/feedbackType';
import style from './cardSlider.module.scss';

interface CardProps extends FeedbackType {}

export const CardSlider: FC<CardProps> = ({ id, name, massege }) => {
  return (
    <li className={style.item} key={id}>
      <p className={style.name}>{name}</p>

      <p className={style.message}>{massege}</p>
    </li>
  );
};
