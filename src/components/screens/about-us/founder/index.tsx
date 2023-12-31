import Image from 'next/image';

import { Border } from '@/components/ui/border';
import { Typography } from '@/components/ui/typography';

import stubPhoto from '../../../../../public/static/images/stub_photo.png';
import styles from './founder.module.scss';

export const Founder = () => (
  <section className={'container'}>
    <Typography fontWeight={'semiBold'} element={'h1'} className={styles.title}>
      Засновник
    </Typography>
    <Typography
      fontWeight={'regular'}
      element={'h5'}
      className={styles.subtitle}>
      благодійного фонду
    </Typography>
    <Border className={styles.border} />
    <div className={styles.info}>
      <div className={styles.imageWrapper}>
        <Image src={stubPhoto} alt={'founder image'} />
      </div>
      <div className={styles.textWrapper}>
        <Typography
          fontWeight={'semiBold'}
          element={'h5'}
          className={styles.fullName}>
          Ім&apos;я та прізвище
        </Typography>
        <Typography fontWeight={'regular'} type={'body'} element={'h6'}>
          Lorem ipsum dolor sit amet consectetur. Ornare diam bibendum purus non
          ut facilisis. Hendrerit orci mattis platea porttitor. Sed ipsum congue
          pulvinar turpis. Egestas etiam purus tristique diam etiam volutpat
          semper non. Sed arcu tortor quis natoque amet. Integer auctor vivamus
          blandit feugiat sed in. Turpis vitae convallis eu viverra sed etiam
          semper nibh. Amet sapien et morbi turpis. Commodo cras amet euismod
          sed a quis ut interdum. Tortor enim elit nisl morbi urna.
          <br /> Ut enim consequat urna scelerisque. Quam in at consectetur
          neque tempus id diam hendrerit. Quis sed consectetur egestas ac rutrum
          diam. Condimentum nunc in posuere sed morbi arcu. Vitae in leo velit
          senectus justo.
        </Typography>
      </div>
    </div>
  </section>
);
