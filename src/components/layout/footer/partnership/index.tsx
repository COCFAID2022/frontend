import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { Typography } from '@/components/ui/typography';

import styles from './partnership.module.scss';

export const Partnership: FC<{ className?: string }> = ({ className }) => (
  <div className={classNames(styles.partnership, className)}>
    <Typography fontWeight={'semiBold'} element={'h5'} className={styles.title}>
      Партнерство
    </Typography>

    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Як стати партнером
      </Typography>
    </Link>
    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Наші партнери
      </Typography>
    </Link>
    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Волонтерство
      </Typography>
    </Link>
    <Link href={'/#'}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        Як долучитись до команди
      </Typography>
    </Link>
  </div>
);
