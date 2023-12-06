import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { Typography } from '@/components/ui/typography';

import styles from './about.module.scss';

export const About: FC<{ className?: string }> = ({ className }) => (
  <div className={classNames(styles.about, className)}>
    <Typography fontWeight={'semiBold'} element={'h5'} className={styles.title}>
      Про фонд
    </Typography>

    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Про нас
      </Typography>
    </Link>
    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Команда
      </Typography>
    </Link>
    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Звітність
      </Typography>
    </Link>
    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Документи
      </Typography>
    </Link>
  </div>
);
