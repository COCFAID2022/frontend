'use client';

import classNames from 'classnames';
import { FC, useRef } from 'react';
import { SwiperRef } from 'swiper/react';

import { Filter } from '@/components/common/filter';
import { SliderNavigationButtons } from '@/components/common/slider-navigation-buttons';
import { Border } from '@/components/ui/border';
import { Typography } from '@/components/ui/typography';

import styles from './section-with-slider.module.scss';
import { Slider } from './slider';
import { TypeCardWithActions } from './types';

interface SectionWithSliderProps {
  haveFilter?: boolean;
  title: string;
  data: TypeCardWithActions[];
}

export const SectionWithSlider: FC<SectionWithSliderProps> = props => {
  const { title, haveFilter = false, data } = props;

  const sliderRef = useRef<SwiperRef>(null);

  const onClickPrevSlide = () => {
    sliderRef.current?.swiper.slidePrev();
  };
  const onClickNextSlide = () => {
    sliderRef.current?.swiper.slideNext();
  };

  return (
    <section className={classNames('container', styles.sectionWithSlider)}>
      <div className={styles.heading}>
        <Typography
          element={'h1'}
          fontWeight={'semiBold'}
          className={styles.title}>
          {title}
        </Typography>
        {haveFilter && (
          <div className={styles.filterWrapper}>
            <Filter />
          </div>
        )}
      </div>

      <Border />

      <div>
        <SliderNavigationButtons
          className={styles.sliderBtns}
          onClickNextSlide={onClickNextSlide}
          onClickPrevSlide={onClickPrevSlide}
        />
        <Slider items={data} sliderRef={sliderRef} />
      </div>
    </section>
  );
};
