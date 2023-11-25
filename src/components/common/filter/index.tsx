'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import { Border } from '@/components/ui/border';
import { Typography } from '@/components/ui/typography';

import FilterIcon from '../../../../public/static/icons/filter.svg';
import styles from './filter.module.scss';
import { FilterMenu } from './filter-menu';

export const Filter = () => {
  const [open, setOpen] = useState(false);

  const filterMenuHandler = () => setOpen(prev => !prev);

  return (
    <div
      className={classNames(styles.filter, {
        [styles.open]: open,
      })}>
      <button
        className={styles.filterButton}
        type={'button'}
        onClick={filterMenuHandler}>
        <Typography
          fontWeight={'regular'}
          element={'h6'}
          className={styles.buttonText}>
          Фільтр
        </Typography>
        <Image src={FilterIcon} alt={'filter'} />
      </button>

      {open && (
        <div>
          <Border />
          <FilterMenu />
        </div>
      )}
    </div>
  );
};
