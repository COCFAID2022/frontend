import { FC } from 'react';

import { Typography } from '@/components/ui/typography';

import styles from './blue-item.module.scss';

interface BlueItemProps {
  firstTitle?: string;
  lastTitle?: string;
}

export const BlueItem: FC<BlueItemProps> = props => {
  const { firstTitle, lastTitle } = props;

  return (
    <div className={styles.blue__item}>
      <Typography
        fontWeight={'semiBold'}
        element={'p'}
        className={styles.title}>
        {firstTitle}
      </Typography>
      <div className={styles.border} />
      <Typography fontWeight={'regular'} element={'p'} className={styles.title}>
        {lastTitle}
      </Typography>
    </div>
  );
};
