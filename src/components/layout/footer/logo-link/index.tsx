import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Typography } from '@/components/ui/typography';
import footerLogo from '@/images/header_logo-blue.png';

import styles from './logo-link.module.scss';

export const LogoLink: FC<{ className?: string }> = ({ className = '' }) => (
  <div className={styles.logoWrapper}>
    <Link href={'/'} className={className}>
      <Image src={footerLogo} className={styles.logo} alt={'footer_logo'} />
    </Link>
    <Typography fontWeight={'semiBold'} element={'h5'} className={styles.title}>
      ПОМІЧ 2022
    </Typography>
    <Typography
      fontWeight={'regular'}
      element={'h6'}
      className={styles.subtitle}>
      Благодійний фонд
    </Typography>
  </div>
);
