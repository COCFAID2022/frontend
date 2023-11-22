import classNames from 'classnames';
import { createElement, FC, PropsWithChildren } from 'react';

import {
  TypeHtmlFontWeight,
  TypeHtmlHeading,
} from '@/shared/types/htmlElements';

import styles from './typography.module.scss';

interface TypographyProps extends PropsWithChildren {
  className?: string;
  fontWeight: TypeHtmlFontWeight;
  size?: 'large';
  type?: 'body' | 'lead';
  element: TypeHtmlHeading;
}

export const Typography: FC<TypographyProps> = props => {
  const { element, size, type, className = '', fontWeight, children } = props;

  const el = element === 'h7' ? 'h6' : element;

  return createElement(
    el,
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
