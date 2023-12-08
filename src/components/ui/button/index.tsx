'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC, MouseEvent } from 'react';

import { Typography } from '@/components/ui/typography';
import {
  TypeHtmlFontWeight,
  TypeHtmlHeading,
} from '@/components/ui/typography/types';

import styles from './button.module.scss';

interface ButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  buttonType?: 'button' | 'submit';
  variant: 'outlined' | 'default';
  value?: {
    text: string;
    className?: string;
    fontWeight: TypeHtmlFontWeight;
    element: TypeHtmlHeading;
    color: 'blueText' | 'blackText' | 'grayText';
  };
  size: 'sm' | 'md' | 'lg';
  label?: string;
  icon: {
    position: 'left' | 'right';
    image: string;
    variant: 'blue' | 'black' | 'gray';
  };
}

export const Button: FC<ButtonProps> = props => {
  const {
    onClick,
    icon,
    buttonType = 'button',
    size,
    label,
    variant,
    value,
  } = props;

  const iconClasses = classNames(
    styles.iconWrapper,
    styles[icon.variant],
    styles[size]
  );

  const valueClasses = classNames(
    styles.value,
    styles[size],
    value?.className || '',
    value?.color ? styles[value.color] : ''
  );

  return (
    <button
      onClick={onClick}
      type={buttonType === 'submit' ? 'submit' : 'button'}
      className={classNames(
        styles.button,
        styles[variant],
        styles[size],
        value?.className
      )}>
      {icon && icon.position === 'left' && (
        <div className={iconClasses}>
          <Image
            src={icon.image}
            className={classNames(styles[size])}
            alt={'icon'}
          />
        </div>
      )}

      {value && label && (
        <div className={styles.valueWithLabel}>
          <Typography
            fontWeight={'regular'}
            element={'h8'}
            className={styles.label}>
            {label}
          </Typography>
          <Typography
            fontWeight={value.fontWeight}
            element={value.element}
            className={valueClasses}>
            {value.text}
          </Typography>
        </div>
      )}

      {value && !label && (
        <Typography
          fontWeight={value.fontWeight}
          element={value.element}
          className={valueClasses}>
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
