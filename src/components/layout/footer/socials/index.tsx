import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Typography } from '@/components/ui/typography';
import facebook from '@/icons/facebook.svg';
import inst from '@/icons/inst.svg';
import twitter from '@/icons/twitter.svg';
import youtube from '@/icons/youtube.svg';

import styles from './socials.module.scss';

export const Socials: FC<{ className?: string }> = ({ className }) => (
  <div className={classNames(styles.socialsWrapper, className)}>
    <Typography fontWeight={'semiBold'} element={'h6'} className={styles.title}>
      Соціальні мережі
    </Typography>
    <ul className={styles.list}>
      <li>
        <Link href={'/facebook'}>
          <Image src={facebook} className={styles.logo} alt={'facebook_logo'} />
        </Link>
      </li>
      <li>
        <Link href={'/inst'}>
          <Image src={inst} className={styles.logo} alt={'inst_logo'} />
        </Link>
      </li>
      <li>
        <Link href={'/twitter'}>
          <Image src={twitter} className={styles.logo} alt={'twitter_logo'} />
        </Link>
      </li>
      <li>
        <Link href={'/youtube'}>
          <Image src={youtube} className={styles.logo} alt={'youtube_logo'} />
        </Link>
      </li>
    </ul>
  </div>
);
