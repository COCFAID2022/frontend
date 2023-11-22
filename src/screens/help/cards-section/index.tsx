'use client';

import 'swiper/css';

import classNames from 'classnames';
import { FC } from 'react';

import { TypeCardData } from '@/shared/types/card-section';
import { Border } from '@/shared/ui/border';

import { Cards } from './cards';
import styles from './cards-section.module.scss';
import { Heading } from './heading';

interface CardsSectionProps {
  title: {
    text: string;
    href: string;
  };
  subTitle: string;
  slider: boolean;
  items: TypeCardData[];
  progress?: boolean;
  ended?: boolean;
}

export const CardsSection: FC<CardsSectionProps> = props => {
  const {
    subTitle,
    ended = false,
    title,
    slider,
    items,
    progress = false,
  } = props;

  return (
    <div className={classNames(styles.helpBox, 'container')}>
      <Heading title={title} subTitle={subTitle} />
      <Border className={styles.border} />
      <Cards slider={slider} items={items} progress={progress} ended={ended} />
    </div>
  );
};
