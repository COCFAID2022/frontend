'use client';

import 'swiper/css';

// import { chunk } from 'lodash';
import { FC, Ref, useEffect, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { CardSponsor } from '../card';
import { TypeCardData } from '../data';
import styles from './slider-sponsors.module.scss';

interface TypeCardDataIn {
  sliderRef: Ref<SwiperRef>;
  items: TypeCardData[];
  slide: number;
  classNames?: string;
}

export const SlideSponsors: FC<TypeCardDataIn> = props => {
  const { sliderRef, items, slide, classNames } = props;
  const [slides, setSlides] = useState<Array<JSX.Element[]>>([]);

  useEffect(() => {
    const groupedSlides: JSX.Element[][] = [];
    for (let i = 0; i < items.length; i += slide) {
      const group = items.slice(i, i + slide);

      const groupElements = group.map(sponsor => (
        <CardSponsor key={sponsor.id} {...sponsor} styleClass={classNames} />
      ));

      groupedSlides.push(groupElements);
    }
    setSlides(groupedSlides);
  }, [items, slide, classNames]);

  return (
    <Swiper ref={sliderRef} className={styles.slider}>
      {slides.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={index} className={styles.slide}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
