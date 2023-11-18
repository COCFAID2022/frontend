import classNames from 'classnames';

import styles from './border.module.scss';

export const Border = (props: { className?: string }) => {
  const { className = '' } = props;
  return <div className={classNames(styles.border, className)}></div>;
};
