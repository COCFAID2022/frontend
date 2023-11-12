import styles from './typography.module.scss';
import { createElement, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
interface TypographyProps extends PropsWithChildren {
  className?: string;
  fontWeight: 'semiBold' | 'regular' | 'bold';
  size?: 'large';
  type?: 'body' | 'lead';
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'p';
}

export const Typography: FC<TypographyProps> = props => {
  const { element, size, type, className = '', fontWeight, children } = props;

  return createElement(
    element,
    {
      className: classNames(
        className,
        styles[fontWeight],
        size && styles[size],
        styles[element],
        type && styles[type]
      ),
    },
    children
  );
};
