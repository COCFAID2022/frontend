import { FC, Ref } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperRef } from 'swiper/swiper-react';

import { Card } from '@/components/common/card';
import { TypeCardData } from '@/components/common/card/types';

import styles from './slider.module.scss';

interface SliderProps {
  sliderRef: Ref<SwiperRef>;
  items: TypeCardData[];
  progress: boolean;
}

export const Slider: FC<SliderProps> = props => {
  const { items, progress, sliderRef } = props;
  return (
    <Swiper
      ref={sliderRef}
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
            <Card
              progress={progress}
              data={item}
              className={{ wrapper: styles.card }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
