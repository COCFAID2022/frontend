import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { TypeCardData } from '@/components/card/types';
import ArrowTopRightIcon from '@/shared/assets/icons/arrowTopRightLight.svg';
import { Button } from '@/shared/ui/button';
import { ProgressLine } from '@/shared/ui/progress-line';
import { Typography } from '@/shared/ui/typography';

import styles from './cart.module.scss';

interface CardProps {
  data: TypeCardData;
  className?: string;
  progress?: boolean;
  ended?: boolean;
}

export const Card: FC<CardProps> = props => {
  const { progress = false, className = '', data, ended = false } = props;
  const { collectingMoney, info, links, id } = data;
  return (
    <div className={classNames(styles.cart, className)}>
      <Image
        src={info.image}
        alt={'card image'}
        className={classNames(styles.image, {
          [styles.ended]: ended,
        })}
      />
      <Typography
        fontWeight={'semiBold'}
        element={'h5'}
        className={styles.title}>
        {info.title}
      </Typography>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.description}>
        {info.description}
      </Typography>

      {collectingMoney?.progressPercent && progress && (
        <div>
          <div>
            <Typography fontWeight={'semiBold'} element={'h6'}>
              Зібрано коштів
            </Typography>
            <Typography fontWeight={'regular'} element={'h7'}>
              {collectingMoney.progressPercent}%
            </Typography>
          </div>

          <ProgressLine percent={collectingMoney.progressPercent} />

          <Typography fontWeight={'regular'} element={'h7'}>
            {collectingMoney.collected}₴ / {collectingMoney.needCollect}₴
          </Typography>
        </div>
      )}
      <div className={styles.buttons}>
        {!ended && (
          <Link href={links.supportLink}>
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
                image: ArrowTopRightIcon,
              }}
            />
          </Link>
        )}

        <Link href={links.moreLink}>
          <Button
            variant={'outlined'}
            value={{
              text: 'Детальніше',
              fontWeight: 'semiBold',
              color: 'black',
              element: 'h7',
            }}
            size={'sm'}
            icon={{
              variant: 'black',
              position: 'left',
              image: ArrowTopRightIcon,
            }}
          />
        </Link>
      </div>
    </div>
  );
};
