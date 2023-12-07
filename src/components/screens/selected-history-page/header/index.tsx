'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ProgressLine } from '@/components/ui/progress-line';
import { Typography } from '@/components/ui/typography';
import buttonIconLight from '@/icons/arrowTopRightLight.svg';
import heard from '@/icons/Vector.svg';

import style from './header.module.scss';
import { Slider } from './slider';
import { VideoPlayer } from './video-player/VideoPlayer';

export const Header = () => {
  const [count, setCount] = useState<number>(0);
  const progressPercent = 20;
  const needCollect = 1000000;
  const collected = 500000;

  const increment = () => {
    setCount(prevCount => {
      return prevCount + 1;
    });
  };

  const videoURL =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

  return (
    <section className={classNames('container', style.feedbackContainer)}>
      <div className={style.flexContainer}>
        <div>
          <VideoPlayer videoUrl={videoURL} />
          <Slider />
        </div>
        <div className={style.secondflex}>
          <Typography
            fontWeight={'semiBold'}
            element={'h5'}
            className={style.title}>
            Доставили близько 400 автівок військовослужбовцям
          </Typography>
          <div className={style.btnWraper}>
            <button type={'button'} className={style.btn}>
              Терміново
            </button>
            <button
              type={'button'}
              className={style.btnIcon}
              onClick={increment}>
              <Image src={heard} alt={'icon'} /> {count}
            </button>
          </div>
          {progressPercent && (
            <div className={style.resultWraper}>
              <div className={style.result}>
                <Typography fontWeight={'semiBold'} element={'h6'}>
                  Зібрано коштів
                </Typography>
                <Typography fontWeight={'regular'} element={'h7'}>
                  {progressPercent}%
                </Typography>
              </div>

              <ProgressLine
                className={style.progress}
                percent={progressPercent}
              />

              <Typography fontWeight={'regular'} element={'h7'}>
                {collected}₴ / {needCollect}₴
              </Typography>
            </div>
          )}
          <div className={style.supportWraper}>
            <Link href={'/support'}>
              <Button
                variant={'outlined'}
                value={{
                  text: 'Підтримати',
                  fontWeight: 'semiBold',
                  color: 'black',
                  element: 'h7',
                }}
                size={'sm'}
                icon={{
                  variant: 'blue',
                  position: 'left',
                  image: buttonIconLight,
                }}
              />
            </Link>
            <Button
              variant={'outlined'}
              size={'sm'}
              icon={{
                position: 'left',
                variant: 'black',
                image: buttonIconLight,
              }}
              value={{
                text: 'Стати партнером',
                fontWeight: 'semiBold',
                element: 'h7',
                color: 'black',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
