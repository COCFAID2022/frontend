'use client';
import { FC, useState } from 'react';

import styles from './button.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

interface ButtonProps {
  shadow: 'regular-shadow';
  iconColors: {
    iconColor: 'icon-light' | 'icon-dark';
    main: 'bg-blue' | 'bg-lightBlue' | 'bg-white';
    active: 'active-bg-to-light-blue' | 'active-bg-to-white' | 'active-bg-blue';
  };
  mode: 'dark' | 'transparent';
  buttonSize: 'small' | 'medium';
  value?: string;
  soloAnimationWithOutText?: boolean;
  animationWithText?: boolean;
}

export const Button: FC<ButtonProps> = props => {
  const {
    shadow,
    buttonSize,
    value,
    mode,
    iconColors,
    soloAnimationWithOutText = false,
    animationWithText = false,
  } = props;

  const [showText, setShowText] = useState(false);

  const textClasses = classNames(styles.text, {
    [styles.smallSpace]: buttonSize === 'small',
    [styles.mediumSpace]: buttonSize === 'medium',
  });

  const iconClasses = classNames(
    styles.iconWrapper,
    styles[iconColors.main],
    styles[iconColors.active],
    {
      [styles.smallIcon]: buttonSize === 'small',
      [styles.mediumIcon]: buttonSize === 'medium',
    }
  );

  return (
    <button className={classNames(styles.button, styles[mode], styles[shadow])}>
      {soloAnimationWithOutText ? (
        <Link href={'/'} className={iconClasses}>
          <svg
            className={styles[iconColors.iconColor]}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'>
            <path
              d='M7 17L17 7'
              stroke='#000010'
              strokeWidth='1.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M7 7H17V17'
              stroke='#000010'
              strokeWidth='1.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      ) : (
        <div className={iconClasses}>
          <svg
            className={styles[iconColors.iconColor]}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'>
            <path
              d='M7 17L17 7'
              stroke='#000010'
              strokeWidth='1.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M7 7H17V17'
              stroke='#000010'
              strokeWidth='1.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      )}

      {(animationWithText && showText) ||
      (!animationWithText && !showText && value) ? (
        <span className={textClasses}>{value}</span>
      ) : null}
    </button>
  );
};
