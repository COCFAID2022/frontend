import classNames from 'classnames';

import { Button } from '@/components/ui/button';
import { EquipmentItem } from '@/components/ui/equipment-item';
import { Typography } from '@/components/ui/typography';
import arrowTopRightLight from '@/icons/arrowTopRightLight.svg';

import styles from './equipment.module.scss';

export const Equipment = () => (
  <section className={classNames(styles.equipment, 'container')}>
    <Typography fontWeight={'semiBold'} element={'h1'} className={styles.title}>
      Необхідне обладнання
    </Typography>
    <div className={styles.wrap__equipment}>
      <EquipmentItem title={'УЗД-апарати'} />
      <EquipmentItem title={'Функціональні медичні ліжка'} />
      <EquipmentItem title={'Кардіографи'} />
      <EquipmentItem title={'Дефибрилятори'} />
      <EquipmentItem title={'Мед'} />
      <EquipmentItem title={'УЗД-апарати'} />
      <EquipmentItem title={'Кардіографи'} />
      <EquipmentItem title={'Функціональні медичні ліжка'} />
      <EquipmentItem title={'Мед'} />
      <EquipmentItem title={'Дефибрилятори'} />
      <EquipmentItem title={'Функціональні медичні ліжка'} />
      <EquipmentItem title={'УЗД-апарати'} />
      <EquipmentItem title={'Мед'} />
      <EquipmentItem title={'Кардіографи'} />
      <EquipmentItem title={'Дефибрилятори'} />
      <EquipmentItem title={'УЗД-апарати'} />
      <EquipmentItem title={'Функціональні медичні ліжка'} />
      <EquipmentItem title={'Кардіографи'} />
      <EquipmentItem title={'Дефибрилятори'} />
      <EquipmentItem title={'Мед'} />
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
          color: 'blue',
          fontWeight: 'semiBold',
          element: 'h7',
        }}
      />
    </div>
  </section>
);
