'use client';

// import 'swiper/swiper-bundle.min.css';

import classNames from 'classnames';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Title } from '@/components/common/title';
import { Border } from '@/components/ui/border';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

import ArrowTopRightIcon from '../../../../../public/static/icons/arrowTopRightLight.svg';
import { VideoPlayer } from '../../selected-history-page/header/video-player/VideoPlayer';
import style from './history.module.scss';
import { videoURL } from './videoData';

export const History = () => {
  return (
    <section>
      <div className={classNames('container')}>
        <Title href={'/our-projects'} text={'Наші проекти'} />
        <Typography fontWeight={'regular'} element={'h5'}>
          Активні напрямки допомоги
        </Typography>
        <Border className={style.border} />
      </div>
      <div className={style.wrapper}>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          loop
          className={style.slider}
          centeredSlides>
          {videoURL.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <VideoPlayer videoUrl={item.url} />
                <div className={style.wraperTitle}>
                  <Typography
                    fontWeight={'semiBold'}
                    element={'h1'}
                    className={style.titleVideo}>
                    Назва історії
                  </Typography>
                  <Link href={'/support'}>
                    <Button
                      variant={'outlined'}
                      value={{
                        className: style.btn,
                        text: 'Детальніше',
                        fontWeight: 'semiBold',
                        color: 'black',
                        element: 'h7',
                      }}
                      size={'sm'}
                      icon={{
                        variant: 'blue',
                        position: 'left',
                        image: ArrowTopRightIcon,
                      }}
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
