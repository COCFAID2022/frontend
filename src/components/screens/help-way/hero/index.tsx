import classNames from 'classnames';

import { BlueItem } from '@/components/ui/blue-item';
import { Typography } from '@/components/ui/typography';

import styles from './hero.module.scss';

export const Hero = () => (
  <section className={classNames(styles.hero, 'container')}>
    <div className={styles.need}>
      <Typography
        fontWeight={'semiBold'}
        element={'h3'}
        type={'lead'}
        className={styles.title}>
        Нагальні потреби медзакладів
      </Typography>
      <div className={styles.border} />
      <Typography fontWeight={'regular'} element={'p'} className={styles.text}>
        Медикаменти та обладнання для забезпечення нагальних потреб медзакладів
        на деокупованих та прифронтових територіях
      </Typography>
    </div>
    <div className={styles.help}>
      <BlueItem firstTitle={'Кардіографи'} lastTitle={'112 штук'} />
      <BlueItem firstTitle={'Допомогли'} lastTitle={'120+ лікарням'} />
      <BlueItem firstTitle={'Узд-апарати'} lastTitle={'18 штук'} />
      <BlueItem firstTitle={'Допомогли'} lastTitle={'3120+ дітям'} />
    </div>
  </section>
);
