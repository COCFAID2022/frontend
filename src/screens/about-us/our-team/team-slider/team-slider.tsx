'use client';
import { FC, useRef } from 'react';
import { TypeTeamData } from '../team-data';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { WorkerSlide } from '@/screens/about-us/our-team/worker-slider/worker-slide';
import 'swiper/css';
import styles from './team-slider.module.scss';
import { SliderNavigationButtons } from '@/screens/about-us/our-team/team-slider/slider-navigation-buttons/slider-navigation-buttons';

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

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={27}
      ref={sliderRef}
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
