import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Description } from '@/components/common/card/description';
import { TypeCardData } from '@/components/common/card/types';
import { Button } from '@/components/ui/button';
import { ProgressLine } from '@/components/ui/progress-line';
import { Typography } from '@/components/ui/typography';

import ArrowTopRightIcon from '../../../../public/static/icons/arrowTopRightLight.svg';
import styles from './cart.module.scss';

interface CardProps {
  data: TypeCardData;
  className?: {
    wrapper?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  progress?: boolean;
  ended?: boolean;
}

export const Card: FC<CardProps> = props => {
  const { progress = false, className, data, ended = false } = props;
  const { collectingMoney, info, links } = data;
  return (
    <div className={classNames(styles.cart, className?.wrapper || '')}>
      <Image
        src={info.image}
        alt={'card image'}
        className={classNames(styles.image, className?.image || '', {
          [styles.ended]: ended,
        })}
      />
      <Typography
        fontWeight={'semiBold'}
        element={'h5'}
        className={classNames(styles.title, className?.title || '')}>
        {info.title}
      </Typography>
      <Description description={info.description} />

      {collectingMoney?.progressPercent && progress && (
        <div>
          <div className={styles.result}>
            <Typography fontWeight={'semiBold'} element={'h6'}>
              Зібрано коштів
            </Typography>
            <Typography fontWeight={'regular'} element={'h7'}>
              {collectingMoney.progressPercent}%
            </Typography>
          </div>

          <ProgressLine
            className={styles.progress}
            percent={collectingMoney.progressPercent}
          />

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
