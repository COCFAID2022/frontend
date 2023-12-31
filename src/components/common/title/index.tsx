import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

import ArrowTopLightIcon from '../../../../public/static/icons/arrowTopRightLight.svg';
import styles from './title.module.scss';

interface TitleProps {
  href: string;
  text: string;
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
}

export const Title: FC<TitleProps> = props => {
  const { text, href, iconSize = 'md', className = '' } = props;
  return (
    <Link href={href} className={classNames(styles.title, className)}>
      <Typography fontWeight={'semiBold'} element={'h1'}>
        {text}
      </Typography>
      <Button
        variant={'default'}
        size={iconSize}
        icon={{
          image: ArrowTopLightIcon,
          variant: 'black',
          position: 'right',
        }}
      />
    </Link>
  );
};
