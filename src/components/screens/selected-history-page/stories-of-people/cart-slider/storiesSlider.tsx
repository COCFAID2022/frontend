'use client';

import 'swiper/css';

import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { SliderNavigationButtons } from '@/components/common/slider-navigation-buttons';

import { CardStory } from '../cardStory/cardStory';
import { StoriesType } from '../types/StoriesType';
import style from './storiesSlider.module.scss';

interface StorySliderProps {
  data: StoriesType[];
}

export const StoriesSlider: FC<StorySliderProps> = ({ data }) => {
  const sliderRef = useRef<SwiperRef>(null);

  const [slides, setSlides] = useState<Array<JSX.Element[]>>([]);

  useEffect(() => {
    const groupedSlides: JSX.Element[][] = [];
    for (let i = 0; i < data.length; i += 1) {
      const group = data.slice(i, i + 1);

      const groupElements = group.map(story => (
        <CardStory key={story.id} {...story} />
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
        className={classNames(style.btnNavigation, style.navigateButton)}
        onClickNextSlide={onClickNextSlide}
        onClickPrevSlide={onClickPrevSlide}
      />
      <Swiper
        direction={'horizontal'}
        spaceBetween={1}
        slidesPerView={'auto'}
        breakpoints={{
          0: { slidesPerView: 'auto' },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1080: { slidesPerView: 2, spaceBetween: 24 },
        }}
        ref={sliderRef}
        loop
        className={style.slider}>
        {slides.map((story, index) => (
          <SwiperSlide className={style.swiperContainer} key={index}>
            {story}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
