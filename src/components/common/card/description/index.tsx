'use client';

import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';

import { Typography } from '@/components/ui/typography';

import styles from './description.module.scss';

interface DescriptionProps {
  description: string;
  className?: string;
}

export const Description: FC<DescriptionProps> = props => {
  const { description, className = '' } = props;

  const [collapsed, setIsCollapsed] = useState(false);

  const updateCardsPerSlide = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  };

  const toggleCollapsed = () => setIsCollapsed(!collapsed);

  useEffect(() => {
    updateCardsPerSlide();
  }, []);

  return (
    <button type={'button'} onClick={toggleCollapsed}>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={classNames(styles.description, className)}>
        {collapsed ? `${description.substring(0, 100)}...` : description}
      </Typography>
    </button>
  );
};
