'use client';

import 'swiper/css';

import classNames from 'classnames';
import { FC, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { Card } from '@/components/common/card';
import { TypeCardData } from '@/components/common/card/types';
import { SliderNavigationButtons } from '@/components/common/slider-navigation-buttons';
import { Typography } from '@/components/ui/typography';

import style from './otherWays.module.scss';

interface CardsProps {
  items: TypeCardData[];
  progress?: boolean;
}

export const OtherWays: FC<CardsProps> = props => {
  const sliderRef = useRef<SwiperRef>(null);

  const { items, progress = false } = props;
  const onClickPrevSlide = () => {
    sliderRef.current?.swiper.slidePrev();
  };

  const onClickNextSlide = () => {
    sliderRef.current?.swiper.slideNext();
  };

  return (
    <section className={classNames('container')}>
      <div className={style.titleContainer}>
        <Typography
          fontWeight={'semiBold'}
          element={'h1'}
          className={style.title}>
          Інші напрямки
        </Typography>
        <SliderNavigationButtons
          onClickNextSlide={onClickNextSlide}
          onClickPrevSlide={onClickPrevSlide}
        />
      </div>
      <div className={style.swapper}>
        <Swiper
          direction={'horizontal'}
          slidesPerView={3}
          spaceBetween={5}
          className={style.swiperCon}
          ref={sliderRef}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          loop>
          {items.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <Card
                progress={progress}
                data={item}
                className={{ wrapper: style.card }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
