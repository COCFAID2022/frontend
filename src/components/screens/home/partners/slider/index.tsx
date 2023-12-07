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
    href: '/1',
    image: PrivatBankPoster,
  },
  {
    href: '/2',
    image: DefaultPhoto,
  },
  {
    href: '/3',
    image: DefaultPhoto,
  },
  {
    href: '/4',
    image: DefaultPhoto,
  },
  {
    href: '/5',
    image: DefaultPhoto,
  },
  {
    href: '/6',
    image: DefaultPhoto,
  },
  {
    href: '/7',
    image: DefaultPhoto,
  },
  {
    href: '/8',
    image: DefaultPhoto,
  },
  {
    href: '/9',
    image: DefaultPhoto,
  },
  {
    href: '/10',
    image: DefaultPhoto,
  },
  {
    href: '/11',
    image: DefaultPhoto,
  },
  {
    href: '/12',
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
      loop
      spaceBetween={24}
      breakpoints={{
        0: { slidesPerView: 'auto', spaceBetween: 10 },
        480: { slidesPerView: 'auto', spaceBetween: 15 },
        768: { slidesPerView: 'auto', spaceBetween: 24 },
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
  );
};
