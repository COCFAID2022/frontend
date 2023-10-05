'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';
import HeaderLogo from '@/shared/assets/img/header_logo.png';
import classNames from 'classnames';
import { Button } from '@/shared/ui/button';
import { useMatchMedia } from '@/shared/hooks/use-match-media';
import { BurgerMenu } from '@/shared/ui/burger-menu';
import { Navigation } from '@/widgets/header/navigation';

// TODO пофіксити при рендері вибиває моб версію хедера а має ту що виходить по розширенню вікна

export const Header = () => {
  const { isDesktop } = useMatchMedia();

  return (
    <div className={styles.headerWrapper}>
      <header className={classNames(styles.header, 'container')}>
        <Image
          src={HeaderLogo}
          priority={true}
          alt={'Поміч 2022'}
          className='logo'
        />
        <Navigation />

        <div className={styles.actions}>
          <Link className={styles.tel} href={'tel:+380666591297'}>
            +380666591297
          </Link>
          <Link href={'/account'} className={styles.accountImage}>
            <svg
              width='35'
              height='35'
              viewBox='0 0 35 35'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5.83334 26.2498C5.83334 24.7027 6.44792 23.219 7.54189 22.125C8.63585 21.0311 10.1196 20.4165 11.6667 20.4165H23.3333C24.8804 20.4165 26.3642 21.0311 27.4581 22.125C28.5521 23.219 29.1667 24.7027 29.1667 26.2498C29.1667 27.0234 28.8594 27.7653 28.3124 28.3122C27.7654 28.8592 27.0236 29.1665 26.25 29.1665H8.75001C7.97646 29.1665 7.2346 28.8592 6.68762 28.3122C6.14063 27.7653 5.83334 27.0234 5.83334 26.2498Z'
                stroke='#E9EDEF'
                strokeWidth='4'
                strokeLinejoin='round'
              />
              <path
                d='M17.5 14.5833C19.9162 14.5833 21.875 12.6245 21.875 10.2083C21.875 7.79201 19.9162 5.83325 17.5 5.83325C15.0838 5.83325 13.125 7.79201 13.125 10.2083C13.125 12.6245 15.0838 14.5833 17.5 14.5833Z'
                stroke='#E9EDEF'
                strokeWidth='4'
              />
            </svg>
          </Link>
          {isDesktop ? (
            <Button
              shadow={'regular-shadow'}
              value={'Підтримати'}
              buttonSize={'small'}
              mode={'dark'}
              iconColors={{
                iconColor: 'icon-light',
                main: 'bg-lightBlue',
                active: 'active-bg-blue',
              }}
            />
          ) : (
            <BurgerMenu />
          )}
        </div>
      </header>
    </div>
  );
};
