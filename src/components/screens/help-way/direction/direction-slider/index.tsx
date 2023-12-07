'use client';

import 'swiper/css';

import Image from 'next/image';
import { FC, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { SliderNavigationButtons } from '@/components/common/slider-navigation-buttons';

import { DirectionType } from '../types/DirectionType';
import style from './directionSlider.module.scss';

interface DirectionSliderProps {
  imgData: DirectionType[];
}

export const DirectionSlider: FC<DirectionSliderProps> = ({ imgData }) => {
  const sliderRef = useRef<SwiperRef>(null);
  const onClickPrevSlide = () => {
    sliderRef.current?.swiper.slidePrev();
  };

  const onClickNextSlide = () => {
    sliderRef.current?.swiper.slideNext();
  };
  return (
    <div className={style.container}>
      <SliderNavigationButtons
        className={style.btnNavigation}
        onClickNextSlide={onClickNextSlide}
        onClickPrevSlide={onClickPrevSlide}
      />
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        spaceBetween={5}
        ref={sliderRef}
        loop>
        {imgData.map(feedback => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={feedback.id}>
            <Image src={feedback.img} alt={'photo'} width={344} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
