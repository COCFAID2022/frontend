'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

import styles from './burger.module.scss';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const openMenuHandler = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <button
        type={'button'}
        className={classNames(styles.menuBtn, {
          [styles.active]: open,
        })}
        onClick={openMenuHandler}>
        <span />
        <span />
        <span />
      </button>
      <div className={classNames(styles.menu, { [styles.active]: open })}>
        <nav>
          <ul>
            <li>
              <Link href={'/'}>Про нас</Link>
            </li>
            <li>
              <Link href={'/'}>Наші проекти</Link>
            </li>
            <li>
              <Link href={'/'}>Як допомогти</Link>
            </li>
            <li>
              <Link href={'/'}>Новини</Link>
            </li>
            <li>
              <Link href={'/'}>UA</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
