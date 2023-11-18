import classNames from 'classnames';
import Image from 'next/image';

import buttonIconLight from '@/shared/assets/icons/arrowTopRightLight.svg';
import UaMap from '@/shared/assets/img/ua_map.png';
import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';

import styles from './hero.module.scss';

export const Hero = () => (
  <section className={classNames(styles.hero, 'container')}>
    <Image src={UaMap} alt={'map'} className={styles.uaMap} />

    <Typography
      fontWeight={'bold'}
      size={'large'}
      element={'h1'}
      className={styles.title}>
      Ми працюємо{' '}
      <span>
        по всій <span className={styles.lastWord}>Україні</span>
      </span>
    </Typography>

    <div className={styles.info}>
      <Typography
        fontWeight={'regular'}
        element={'p'}
        type={'lead'}
        className={styles.description}>
        Фонд був заснований з метою надання гуманітарної допомоги та медичного
        обслуговування цивільному населенню.
      </Typography>
      <div className={styles.actions}>
        <Button
          variant={'outlined'}
          size={'sm'}
          icon={{ position: 'left', variant: 'blue', image: buttonIconLight }}
          value={{
            text: 'Підтримати',
            fontWeight: 'semiBold',
            element: 'h7',
            color: 'black',
          }}
        />
        <Button
          variant={'outlined'}
          label={'Гаряча лінія'}
          size={'sm'}
          icon={{
            position: 'left',
            variant: 'black',
            image: buttonIconLight,
          }}
          value={{
            text: 'Стати партнером',
            fontWeight: 'semiBold',
            element: 'h7',
            color: 'black',
          }}
        />
      </div>
    </div>
  </section>
);
