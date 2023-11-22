import { FC } from 'react';

import styles from './progress-line.module.scss';

interface ProgressLineProps {
  percent: number;
}

export const ProgressLine: FC<ProgressLineProps> = props => {
  const { percent } = props;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${percent}%` }} />
    </div>
  );
};
