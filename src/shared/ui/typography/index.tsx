import classNames from 'classnames';
import { createElement, FC, PropsWithChildren } from 'react';

import {
  TypeHtmlFontWeight,
  TypeHtmlHeading,
} from '@/shared/app/types/htmlElements';

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
