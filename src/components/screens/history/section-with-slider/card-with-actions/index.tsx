import { FC } from 'react';

import { Card } from '@/components/common/card';

import { Actions } from '../actions';
import { TypeCardWithActions } from '../types';
import styles from './card-with-actions.module.scss';

interface CardWithActionsProps {
  data: TypeCardWithActions;
}

export const CardWithActions: FC<CardWithActionsProps> = props => {
  const { data } = props;

  return (
    <div className={styles.card}>
      <Card data={data} />
      <Actions actions={data.actions} />
    </div>
  );
};
