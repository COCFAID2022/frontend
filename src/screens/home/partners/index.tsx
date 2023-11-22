// import Image from 'next/image';
//
// import ArrowLeft from '../image/arrow-left.png';
// import ArrowRight from '../image/arrow-right.png';
// import PrivatBankPoster from '../image/poster-privatbank.png';
// import SliderPoster from '../image/poster-slider.png';
// import MainStyle from '../StyleHelpPage.module.scss';
// import style from './partners.module.scss';
//
// export const Index = () => (
//   <section className={`${style.partners} ${MainStyle.flex}`}>
//     <div className={`${style['partners-items']} ${MainStyle.flex}`}>
//       <h4 className={style['partners-items__title']}>Партнери</h4>
//       <div className={`${style['btn-block']} ${MainStyle.flex}`}>
//         <Image src={ArrowLeft} priority alt={'arrowLeft'} className={''} />
//         <Image src={ArrowRight} priority alt={'arrowLeft'} className={''} />
//       </div>
//     </div>
//     <div
//       className={`${style['partners-slider']} ${style.swiper} ${MainStyle.flex}`}>
//       <div className={`${style['swiper-container']} ${MainStyle.flex}`}>
//         <div className={style['swiper-slide']}>
//           <Image
//             src={PrivatBankPoster}
//             priority
//             alt={'poster'}
//             className={'swiper-slide__poster'}
//           />
//         </div>
//         <div className={style['swiper-slide']}>
//           <Image
//             src={SliderPoster}
//             priority
//             alt={'poster'}
//             className={'swiper-slide__poster'}
//           />
//         </div>
//         <div className={style['swiper-slide']}>
//           <Image
//             src={SliderPoster}
//             priority
//             alt={'poster'}
//             className={'swiper-slide__poster'}
//           />
//         </div>
//         <div className={style['swiper-slide']}>
//           <Image
//             src={SliderPoster}
//             priority
//             alt={'poster'}
//             className={'swiper-slide__poster'}
//           />
//         </div>
//         <div className={style['swiper-slide']}>
//           <Image
//             src={SliderPoster}
//             priority
//             alt={'poster'}
//             className={'swiper-slide__poster'}
//           />
//         </div>
//         <div className={style['swiper-slide']}>
//           <Image
//             src={SliderPoster}
//             priority
//             alt={'poster'}
//             className={'swiper-slide__poster'}
//           />
//         </div>
//       </div>
//     </div>
//     <div className={style['block-btns']}>
//       <div className={style['number second']}>
//         <p className={style.number__tel}>Стати партнером</p>
//       </div>
//       <div className={style['number black']}>
//         <p className={style.number__tel}>Усі партнери</p>
//       </div>
//     </div>
//   </section>
// );

'use client';

import 'swiper/css';

import classNames from 'classnames';
import { useRef } from 'react';
import { SwiperRef } from 'swiper/react';

import IconArrowTopLight from '@/shared/assets/icons/arrowTopRightLight.svg';
import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';

import { SliderNavigationButtons } from '../../../components/slider-navigation-buttons';
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
            color: 'black',
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
            color: 'black',
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
