import 'swiper/css';

import { chunk } from 'lodash';
import { FC, Ref, useEffect, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { CardWithActions } from '../card-with-actions';
import { TypeCardWithActions } from '../types';
import styles from './slider.module.scss';

interface SliderProps {
  sliderRef: Ref<SwiperRef>;
  items: TypeCardWithActions[];
}

export const Slider: FC<SliderProps> = props => {
  const { sliderRef, items } = props;
  const [cardsPerSlide, setCardsPerSlide] = useState(2);

  const updateCardsPerSlide = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 480) {
      setCardsPerSlide(2); // Для мобильных
    } else if (screenWidth >= 481 && screenWidth <= 768) {
      setCardsPerSlide(4); // Для планшетов
    } else {
      setCardsPerSlide(6); // Для десктопов
    }
  };

  useEffect(() => {
    updateCardsPerSlide();

    const handleResize = () => {
      updateCardsPerSlide();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const chunkedItems = chunk(items, cardsPerSlide);

  return (
    <Swiper ref={sliderRef} className={styles.slider}>
      {chunkedItems.map((chunkItems, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={`chunk-${index}`} className={styles.slide}>
          {chunkItems.map(item => (
            <CardWithActions key={item.id} data={item} />
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
