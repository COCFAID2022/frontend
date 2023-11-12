'use client';
import { FC } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';
import Image from 'next/image';
import { Typography } from '@/shared/ui/typography';
import {
  TypeHtmlFontWeight,
  TypeHtmlHeading,
} from '@/shared/app/types/htmlElements';

interface ButtonProps {
  variant: 'outlined' | 'default';
  value?: {
    text: string;
    className?: string;
    fontWeight: TypeHtmlFontWeight;
    element: TypeHtmlHeading;
    color: 'blue' | 'black';
  };
  size: 'sm' | 'md' | 'lg';
  label?: string;
  icon: {
    position: 'left' | 'right';
    image: string;
    variant: 'blue' | 'black';
  };
}

export const Button: FC<ButtonProps> = props => {
  const { icon, size, label, variant, value } = props;

  const iconClasses = classNames(
    styles.iconWrapper,
    styles[icon!.variant],
    styles[size]
  );

  const valueClasses = classNames(
    styles.value,
    styles[size],
    value?.className && styles[value.className]
  );

  return (
    <button
      className={classNames(styles.button, styles[variant], styles[size])}>
      {icon && icon.position === 'left' && (
        <div className={iconClasses}>
          <Image
            src={icon.image}
            className={classNames(styles[size])}
            alt={'icon'}
          />
        </div>
      )}

      {value && (
        <Typography
          fontWeight={value.fontWeight}
          element={value.element}
          className={classNames(styles.value, styles[size], {
            [styles.blueColor]: value.color === 'blue',
          })}>
          {value.text}
        </Typography>
      )}

      {icon && icon.position === 'right' && (
        <div className={iconClasses}>
          <Image
            src={icon.image}
            className={classNames(styles[size])}
            alt={'icon'}
          />
        </div>
      )}
    </button>
  );
};
