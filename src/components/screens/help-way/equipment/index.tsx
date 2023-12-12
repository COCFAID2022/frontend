import classNames from 'classnames';

import { Button } from '@/components/ui/button';
import { EquipmentItem } from '@/components/ui/equipment-item';
import { Typography } from '@/components/ui/typography';
import arrowTopRightLight from '@/icons/arrowTopRightLight.svg';

import { equipment } from './data';
import styles from './equipment.module.scss';

export const Equipment = () => {
  return (
    <section className={classNames(styles.equipment, 'container')}>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={styles.title}>
        Необхідне обладнання
      </Typography>
      <div className={styles.wrap__equipment}>
        {equipment.map(el => (
          <EquipmentItem key={el.id} title={el.name} />
        ))}
      </div>

      <div className={styles.buttonSupport}>
        <Button
          variant={'outlined'}
          size={'sm'}
          icon={{
            variant: 'blue',
            position: 'left',
            image: arrowTopRightLight,
          }}
          value={{
            text: 'Підтримати',
            color: 'blackText',
            fontWeight: 'semiBold',
            element: 'h7',
          }}
        />
      </div>
    </section>
  );
};

