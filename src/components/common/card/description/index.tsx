'use client';

import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';

import { Typography } from '@/components/ui/typography';

import { useMatchMedia } from '../../../../hooks/use-match-media';
import styles from './description.module.scss';

interface DescriptionProps {
  description: string;
  className?: string;
}

export const Description: FC<DescriptionProps> = props => {
  const { description, className = '' } = props;
  const { isMobile } = useMatchMedia();
  const [collapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => {
    if (isMobile) {
      setIsCollapsed(!collapsed);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  }, [isMobile]);

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
