import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { Typography } from '@/components/ui/typography';

import styles from './help.module.scss';

export const Help: FC<{ className?: string }> = ({ className }) => (
  <div className={classNames(styles.help, className)}>
    <Typography fontWeight={'semiBold'} element={'h5'} className={styles.title}>
      Допомога
    </Typography>

    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Гуманітарна допомога
      </Typography>
    </Link>
    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Допомога армії
      </Typography>
    </Link>
    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Проекти
      </Typography>
    </Link>
    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Головні питання
      </Typography>
    </Link>
  </div>
);
