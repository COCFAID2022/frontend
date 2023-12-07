'use client';

import 'swiper/css';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { SliderNavigationButtons } from '@/components/common/slider-navigation-buttons';

import { sliderItems } from './data';
import styles from './slider.module.scss';

export const Slider = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const onClickPrevSlide = () => {
    sliderRef.current?.swiper.slidePrev();
  };
  const onClickNextSlide = () => {
    sliderRef.current?.swiper.slideNext();
  };

  return (
    <div className={styles.sliderWrapper}>
      <SliderNavigationButtons
        className={styles.navButtons}
        onClickPrevSlide={onClickPrevSlide}
        onClickNextSlide={onClickNextSlide}
      />

      <Swiper
        ref={sliderRef}
        className={styles.slider}
        breakpoints={{
          0: { slidesPerView: 'auto', loop: true, spaceBetween: 10 },
          481: { slidesPerView: 'auto', loop: true, spaceBetween: 29 },
          769: { slidesPerView: 'auto', loop: true, spaceBetween: 20 },
        }}>
        {sliderItems.map(item => {
          return (
            <SwiperSlide key={item.href} className={styles.slide}>
              <Link href={item.href} className={styles.link}>
                <Image
                  src={item.image}
                  alt={item.href}
                  className={styles.image}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
