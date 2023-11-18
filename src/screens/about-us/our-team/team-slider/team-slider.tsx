'use client';
import 'swiper/css';

import { FC, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

import { SliderNavigationButtons } from '@/screens/about-us/our-team/team-slider/slider-navigation-buttons/slider-navigation-buttons';
import { WorkerSlide } from '@/screens/about-us/our-team/worker-slider/worker-slide';

import { TypeTeamData } from '../team-data';
import styles from './team-slider.module.scss';

type TypeTeamSliderProps = Pick<TypeTeamData, 'workers'>;

export const TeamSlider: FC<TypeTeamSliderProps> = props => {
  const { workers } = props;
  const sliderRef = useRef<SwiperRef>(null);

  const onClickPrevSlide = () => {
    sliderRef.current?.swiper.slidePrev();
  };
  const onClickNextSlide = () => {
    sliderRef.current?.swiper.slideNext();
  };

  const swiperBreakpoints: SwiperOptions['breakpoints'] = {
    320: {
      slidesPerView: 1,
    },
    374: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      ref={sliderRef}
      breakpoints={swiperBreakpoints}
      className={styles.slider}>
      <SliderNavigationButtons
        onClickNextSlide={onClickNextSlide}
        onClickPrevSlide={onClickPrevSlide}
      />
      {workers.map(worker => {
        return (
          <SwiperSlide key={worker.id}>
            <WorkerSlide worker={worker} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
