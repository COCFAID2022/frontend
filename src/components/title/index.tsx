import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import ArrowTopLightIcon from '@/shared/assets/icons/arrowTopRightLight.svg';
import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';

import styles from './title.module.scss';

interface TitleProps {
  href: string;
  text: string;
  className?: string;
}

export const Title: FC<TitleProps> = props => {
  const { text, href, className = '' } = props;
  return (
    <Link href={href} className={classNames(styles.title, className)}>
      <Typography fontWeight={'semiBold'} element={'h1'}>
        {text}
      </Typography>
      <Button
        variant={'default'}
        size={'lg'}
        icon={{
          image: ArrowTopLightIcon,
          variant: 'black',
          position: 'right',
        }}
      />
    </Link>
  );
};
