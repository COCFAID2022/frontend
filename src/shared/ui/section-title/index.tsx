import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './section-title.module.scss';

interface SectionTitleProps extends PropsWithChildren {
  variant: 'light' | 'dark';
  position: 'left' | 'right';
  cls?: string;
}

export const SectionTitle: FC<SectionTitleProps> = props => {
  const { variant, children, position, cls = '' } = props;

  return (
    <div className={classNames(styles.box, styles[position], cls)}>
      <h2 className={classNames(styles.title, styles[variant])}>{children}</h2>
      <div className={styles.line} />
    </div>
  );
};
