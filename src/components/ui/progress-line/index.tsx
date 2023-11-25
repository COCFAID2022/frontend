import classNames from 'classnames';
import { FC } from 'react';

import styles from './progress-line.module.scss';

interface ProgressLineProps {
  percent: number;
  className?: string;
}

export const ProgressLine: FC<ProgressLineProps> = props => {
  const { percent, className = '' } = props;

  return (
    <div className={classNames(styles.progressContainer, className)}>
      <div className={styles.progressBar} style={{ width: `${percent}%` }} />
    </div>
  );
};
