'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './slider.module.scss';
import { sliderItems } from './data/sliderItems';
import { Slide } from './slide';
import { SideSlide } from './side-slide';
import { NavigationButtons } from './navigation-buttons/navigation-buttons';

export const Slider = () => {
  const mainSliderRef = useRef<SwiperRef>(null);
  const leftSliderRef = useRef<SwiperRef>(null);
  const rightSliderRef = useRef<SwiperRef>(null);

  const onClickPrevSlide = () => {
    console.log('prev');
    mainSliderRef.current?.swiper.slidePrev();
    leftSliderRef.current?.swiper.slidePrev();
    rightSliderRef.current?.swiper.slidePrev();
  };
  const onClickNextSlide = () => {
    console.log('next');
    mainSliderRef.current?.swiper.slideNext();
    leftSliderRef.current?.swiper.slideNext();
    rightSliderRef.current?.swiper.slideNext();
  };

  const onMainSlideChange = (swiper: SwiperType) => {
    const { swipeDirection } = swiper;

    if (swipeDirection === 'prev') {
      leftSliderRef.current?.swiper.slidePrev();
      rightSliderRef.current?.swiper.slidePrev();
    }

    if (swipeDirection === 'next') {
      rightSliderRef.current?.swiper.slideNext();
      leftSliderRef.current?.swiper.slideNext();
    }
  };

  return (
    <div className={styles.wrapper}>
      <SideSlide
        onClickHandler={onClickPrevSlide}
        sliderRef={leftSliderRef}
        initialSlide={0}
      />

      <Swiper
        initialSlide={1}
        allowTouchMove={false}
        noSwiping={false}
        ref={mainSliderRef}
        loop={true}
        onSlideChange={onMainSlideChange}
        className={styles.swiper}>
        {sliderItems.map((item, index) => {
          return (
            <SwiperSlide key={item.projectName} className={styles.slide}>
              <Slide slideData={item} />
            </SwiperSlide>
          );
        })}
        <NavigationButtons
          nextHandler={onClickNextSlide}
          prevHandler={onClickPrevSlide}
        />
      </Swiper>

      <SideSlide
        sliderRef={rightSliderRef}
        onClickHandler={onClickNextSlide}
        initialSlide={2}
      />
    </div>
  );
};
