import styles from './border.module.scss';
import classNames from 'classnames';

export const Border = (props: { className?: string }) => {
  const { className = '' } = props;
  return <div className={classNames(styles.border, className)}></div>;
};
