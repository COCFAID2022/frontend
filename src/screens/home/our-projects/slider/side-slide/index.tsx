import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderItems } from '../data/sliderItems';
import { Slide } from './slide/slide';
import styles from './side-slide.module.scss';

interface SideSlideProps {
  onClickHandler: any;
  sliderRef: any;
  initialSlide: 0 | 2;
}

export const SideSlide: FC<SideSlideProps> = props => {
  const { sliderRef, onClickHandler, initialSlide } = props;

  return (
    <Swiper
      allowTouchMove={false}
      noSwiping={false}
      initialSlide={initialSlide}
      ref={sliderRef}
      loop={true}
      className={styles.slider}>
      {sliderItems.map((item, index) => {
        return (
          <SwiperSlide
            key={item.projectName}
            onClick={onClickHandler}
            className={styles.slide}>
            <Slide item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
