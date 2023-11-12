import styles from './typography.module.scss';
import { createElement, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import {
  TypeHtmlFontWeight,
  TypeHtmlHeading,
} from '@/shared/app/types/htmlElements';
interface TypographyProps extends PropsWithChildren {
  className?: string;
  fontWeight: TypeHtmlFontWeight;
  size?: 'large';
  type?: 'body' | 'lead';
  element: TypeHtmlHeading;
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
