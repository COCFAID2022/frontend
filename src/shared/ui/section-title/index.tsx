import styles from './section-title.module.scss';
import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

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
      <div className={styles.line}></div>
    </div>
  );
};
