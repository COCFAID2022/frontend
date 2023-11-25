import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '@/components/common/card';
import { TypeCardData } from '@/components/common/card/types';

import styles from './slider.module.scss';

interface SliderProps {
  items: TypeCardData[];
  progress: boolean;
}

// breakpoints={{
//     0: {
//         slidesPerView: 1,
//     },
//     480: {
//         slidesPerView: 2,
//             spaceBetween: 15,
//     },
//     768: {
//         slidesPerView: 3,
//     },
// }}

export const Slider: FC<SliderProps> = props => {
  const { items, progress } = props;
  return (
    <Swiper
      className={styles.slider}
      slidesPerView={'auto'}
      spaceBetween={24}
      breakpoints={{
        0: { slidesPerView: 'auto' },
        480: { slidesPerView: 2, spaceBetween: 6 },
        560: { slidesPerView: 2, spaceBetween: 16 },
        768: { slidesPerView: 3, spaceBetween: 6 },
        1024: { slidesPerView: 3 },
      }}>
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
