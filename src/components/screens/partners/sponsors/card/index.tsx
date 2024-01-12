import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Typography } from '@/components/ui/typography';

// import { TypeCardData } from '../data';
import styles from './card-sponsor.module.scss';

interface TypeCardDataIn {
  info: {
    description?: string;
    image: StaticImageData;
    title?: string;
  };
  styleClass?: string;
}

export const CardSponsor: FC<TypeCardDataIn> = ({ info, styleClass }) => {
  return (
    <div
      className={classNames({
        [styles.imgPrivat]: styleClass,
        [styles.slider]: !styleClass,
      })}>
      <Link href={'/partners'}>
        <Image
          src={info.image}
          alt={'card image'}
          className={classNames({ [styles.img]: styleClass })}
        />
      </Link>
      {info.description && info.title ? (
        <div className={styles.text}>
          <Typography fontWeight={'semiBold'} element={'h5'}>
            {info.title}
          </Typography>
          <Typography fontWeight={'semiBold'} element={'h6'}>
            {info.description}
          </Typography>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
