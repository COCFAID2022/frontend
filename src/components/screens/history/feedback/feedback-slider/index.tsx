'use client';

import 'swiper/css';

import { FC, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { SliderNavigationButtons } from '@/components/common/slider-navigation-buttons';
import { Button } from '@/components/ui/button';

import arrowRightLight from '../../../../../../public/static/icons/arrowTopRightLight.svg';
import { CardSlider } from '../card-slider/cardSlider';
import { FeedbackType } from '../types/feedbackType';
import style from './feedbackSlider.module.scss';

interface FeedbackSliderProps {
  data: FeedbackType[];
}

export const FeedbackSlider: FC<FeedbackSliderProps> = ({ data }) => {
  const sliderRef = useRef<SwiperRef>(null);

  const onClickPrevSlide = () => {
    const currentSlideIndex = sliderRef.current?.swiper.realIndex;
    if (typeof currentSlideIndex === 'number') {
      const newIndex = currentSlideIndex - 5;
      sliderRef.current?.swiper.slideTo(newIndex);
    }
  };

  const onClickNextSlide = () => {
    const currentSlideIndex = sliderRef.current?.swiper.realIndex;
    if (typeof currentSlideIndex === 'number') {
      const newIndex = currentSlideIndex + 5;
      sliderRef.current?.swiper.slideTo(newIndex);
    }
  };

  const swiperBreakpoints = {
    320: {
      slidesPerView: 5,
    },
  };
  return (
    <>
      <SliderNavigationButtons
        className={style.btnNavigation}
        onClickNextSlide={onClickNextSlide}
        onClickPrevSlide={onClickPrevSlide}
      />
      <Swiper
        direction={'vertical'}
        slidesPerView={5}
        spaceBetween={5}
        ref={sliderRef}
        breakpoints={swiperBreakpoints}
        loop
        className={style.slider}>
        {data.map(feedback => (
          <SwiperSlide key={feedback.id}>
            <CardSlider key={feedback.id} {...feedback} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        buttonType={'button'}
        variant={'outlined'}
        size={'sm'}
        icon={{
          variant: 'blue',
          image: arrowRightLight,
          position: 'left',
        }}
        value={{
          text: 'Залишити відгук',
          element: 'h7',
          fontWeight: 'semiBold',
          color: 'black',
        }}
      />
    </>
  );
};
