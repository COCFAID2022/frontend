import classNames from 'classnames';
import Image from 'next/image';

import logoHeart from '@/shared/assets/img/hero_heart.png';
import { Typography } from '@/shared/ui/typography';

import styles from './hero.module.scss';

export const Hero = () => (
  <section className={classNames(styles.hero, 'container')}>
    <div className={styles.text}>
      <Typography
        fontWeight={'bold'}
        size={'large'}
        element={'h1'}
        className={styles.title}>
        ПОМІЧ 2022
      </Typography>
      <Typography
        fontWeight={'regular'}
        element={'h2'}
        className={styles.subtitle}>
        Благодійний фонд
      </Typography>
      <Typography
        fontWeight={'regular'}
        element={'p'}
        type={'lead'}
        className={styles.description}>
        Зробіть крок до підтримки наших військових. Приєднуйтесь до нашого
        благодійного фонду та підтримайте тих, хто захищає нас усіх!
      </Typography>
    </div>
    <Image className={styles.image} src={logoHeart} alt={'heart'} />
  </section>
);
