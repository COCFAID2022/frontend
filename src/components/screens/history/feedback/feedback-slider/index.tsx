'use client';

import 'swiper/css';

import { FC, useEffect, useRef, useState } from 'react';
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

  const [slides, setSlides] = useState<Array<JSX.Element[]>>([]);

  useEffect(() => {
    const groupedSlides: JSX.Element[][] = [];
    for (let i = 0; i < data.length; i += 5) {
      const group = data.slice(i, i + 5);

      const groupElements = group.map(feedback => (
        <CardSlider key={feedback.id} {...feedback} />
      ));

      groupedSlides.push(groupElements);
    }
    setSlides(groupedSlides);
  }, [data]);

  const onClickPrevSlide = () => {
    sliderRef.current?.swiper.slidePrev();
  };

  const onClickNextSlide = () => {
    sliderRef.current?.swiper.slideNext();
  };

  return (
    <>
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
        loop
        className={style.slider}>
        {slides.map((feedback, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide className={style.swiperContainer} key={index}>
            {feedback}
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
