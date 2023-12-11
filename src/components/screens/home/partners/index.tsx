'use client';

import 'swiper/css';

import classNames from 'classnames';
import { useRef } from 'react';
import { SwiperRef } from 'swiper/react';

import { SliderNavigationButtons } from '@/components/common/slider-navigation-buttons';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

import IconArrowTopLight from '../../../../../public/static/icons/arrowTopRightLight.svg';
import styles from './partners.module.scss';
import { Slider } from './slider';

export const Partners = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const onClickPrevSlide = () => {
    sliderRef.current?.swiper.slidePrev();
  };
  const onClickNextSlide = () => {
    sliderRef.current?.swiper.slideNext();
  };

  return (
    <section className={classNames(styles.partners, 'container')}>
      <div className={styles.top}>
        <Typography fontWeight={'semiBold'} element={'h5'}>
          Партнери
        </Typography>
        <SliderNavigationButtons
          className={styles.navButtons}
          onClickPrevSlide={onClickPrevSlide}
          onClickNextSlide={onClickNextSlide}
        />
      </div>
      <Slider sliderRef={sliderRef} />
      <div className={styles.buttons}>
        <Button
          variant={'outlined'}
          value={{
            element: 'h7',
            color: 'blackText',
            text: 'Стати партнером',
            fontWeight: 'semiBold',
          }}
          size={'sm'}
          icon={{ variant: 'blue', image: IconArrowTopLight, position: 'left' }}
        />
        <Button
          variant={'outlined'}
          value={{
            element: 'h7',
            color: 'blackText',
            text: 'Усі партнери',
            fontWeight: 'semiBold',
          }}
          size={'sm'}
          icon={{
            image: IconArrowTopLight,
            position: 'left',
            variant: 'black',
          }}
        />
      </div>
    </section>
  );
};
