import { FC } from 'react';

import { Typography } from '@/shared/ui/typography';

import styles from './equipment-item.module.scss';

interface EquipmentItemProps {
  title?: string;
}

export const EquipmentItem: FC<EquipmentItemProps> = props => {
  const { title } = props;

  return (
    <Typography fontWeight={'semiBold'} element={'p'} className={styles.title}>
      {title}
    </Typography>
  );
};
