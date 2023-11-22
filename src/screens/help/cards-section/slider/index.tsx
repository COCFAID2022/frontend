import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TypeCardData } from '@/shared/types/card-section';

import { Card } from '../../../../components/card';
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
