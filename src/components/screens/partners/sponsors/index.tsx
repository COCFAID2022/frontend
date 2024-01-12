'use client';

import { FC, useRef } from 'react';
import { SwiperRef } from 'swiper/react';

import { SliderNavigationButtons } from '@/components/common/slider-navigation-buttons';
import { Border } from '@/components/ui/border';
import { Typography } from '@/components/ui/typography';

import { TypeCardData } from './data';
import { SlideSponsors } from './slide-sponsors';
import styles from './sponsors.module.scss';

interface CardI {
  data: TypeCardData[];
  slide: number;
  classNames?: string;
  title: string;
}

export const Sponsors: FC<CardI> = props => {
  const { data, slide, classNames, title } = props;

  const sliderRef = useRef<SwiperRef>(null);

  const onClickPrevSlide = () => {
    sliderRef.current?.swiper.slidePrev();
  };

  const onClickNextSlide = () => {
    sliderRef.current?.swiper.slideNext();
  };

  return (
    <div>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={styles.title}>
        {title}
      </Typography>

      <Border />

      <div>
        <SliderNavigationButtons
          className={styles.sliderBtns}
          onClickNextSlide={onClickNextSlide}
          onClickPrevSlide={onClickPrevSlide}
        />
        <SlideSponsors
          items={data}
          sliderRef={sliderRef}
          slide={slide}
          classNames={classNames}
        />
      </div>
    </div>
  );
};
