import classNames from 'classnames';
import { FC } from 'react';

import styles from './border.module.scss';

interface BorderProps {
  className?: string;
}

export const Border: FC<BorderProps> = props => {
  const { className = '' } = props;
  return <div className={classNames(styles.border, className)} />;
};
