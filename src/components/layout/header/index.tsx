import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { LangSwitcher } from '@/components/layout/header/lang-switcher';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import arrowTopRightLight from '@/icons/arrowTopRightLight.svg';
import phoneIcon from '@/icons/phone.svg';
import burgerIcon from '@/images/burger-menu.png';
import headerLogo from '@/images/header_logo-blue.png';

import styles from './header.module.scss';

export const Header = () => (
  <header className={classNames(styles.header, 'container')}>
    <Link href={'/'} className={styles.logoWrapper}>
      <Image src={headerLogo} className={styles.logo} alt={'header_logo'} />
    </Link>

    <nav className={styles.navigation}>
      <Link href={'/about-us'}>
        <Typography
          fontWeight={'semiBold'}
          element={'h7'}
          className={styles.link}>
          Про нас
        </Typography>
      </Link>
      <Link href={'/our-projects'}>
        <Typography
          fontWeight={'semiBold'}
          element={'h7'}
          className={styles.link}>
          Наші проекти
        </Typography>
      </Link>
      <Link href={'/help-way'}>
        <Typography
          fontWeight={'semiBold'}
          element={'h7'}
          className={styles.link}>
          Як допомогти
        </Typography>
      </Link>
      <Link href={'/news'}>
        <Typography
          fontWeight={'semiBold'}
          element={'h7'}
          className={styles.link}>
          Новини
        </Typography>
      </Link>
      <Link href={'/teaching'}>
        <Typography
          fontWeight={'semiBold'}
          element={'h7'}
          className={styles.link}>
          Навчання
        </Typography>
      </Link>
    </nav>

    <Link href={'/history'}>
      <Typography
        fontWeight={'semiBold'}
        element={'h7'}
        className={styles.link}>
        tmp
      </Typography>
    </Link>

    <LangSwitcher />

    <div className={styles.buttonTel}>
      <Button
        variant={'outlined'}
        size={'sm'}
        icon={{ variant: 'blue', position: 'left', image: phoneIcon }}
        label={'Гаряча лінія'}
        value={{
          element: 'h7',
          fontWeight: 'semiBold',
          color: 'blue',
          text: '050 612 45 68',
        }}
      />
    </div>
    <div className={styles.buttonSupport}>
      <Button
        variant={'outlined'}
        size={'sm'}
        icon={{
          variant: 'blue',
          position: 'left',
          image: arrowTopRightLight,
        }}
        value={{
          text: 'Підтримати',
          color: 'blue',
          fontWeight: 'semiBold',
          element: 'h7',
        }}
      />
    </div>

    <div className={styles.burger}>
      <Image src={burgerIcon} alt={'burger'} />
    </div>
  </header>
);
