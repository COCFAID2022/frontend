import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC, Ref } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import PrivatBankPoster from '../../../../../../public/static/images/poster-privatbank.png';
import DefaultPhoto from '../../../../../../public/static/images/stub_photo.png';
import styles from './slider.module.scss';

type TypeSliderItems = {
  image: StaticImageData;
  href: string;
};

const sliderItems: TypeSliderItems[] = [
  {
    href: '/privat',
    image: PrivatBankPoster,
  },
  {
    href: '/def1',
    image: DefaultPhoto,
  },
  {
    href: '/def2',
    image: DefaultPhoto,
  },
  {
    href: '/def3',
    image: DefaultPhoto,
  },
  {
    href: '/def4',
    image: DefaultPhoto,
  },
  {
    href: '/def5',
    image: DefaultPhoto,
  },
  {
    href: '/def6',
    image: DefaultPhoto,
  },
  {
    href: '/def12',
    image: DefaultPhoto,
  },
  {
    href: '/def23',
    image: DefaultPhoto,
  },
  {
    href: '/def111',
    image: DefaultPhoto,
  },
];

interface SliderProps {
  sliderRef: Ref<SwiperRef>;
}

export const Slider: FC<SliderProps> = props => {
  const { sliderRef } = props;

  return (
    <Swiper
      ref={sliderRef}
      className={styles.slider}
      slidesPerView={6}
      spaceBetween={24}>
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
  );
};
