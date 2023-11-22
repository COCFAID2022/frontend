import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '@/components/common/card';
import { TypeCardData } from '@/components/common/card/types';

import styles from './slider.module.scss';

interface SliderProps {
  items: TypeCardData[];
  progress: boolean;
}

export const Slider: FC<SliderProps> = props => {
  const { items, progress } = props;
  return (
    <Swiper className={styles.slider} slidesPerView={3} spaceBetween={23}>
      {items.map(item => {
        return (
          <SwiperSlide key={item.id} className={styles.slide}>
            <Card progress={progress} data={item} className={styles.card} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
