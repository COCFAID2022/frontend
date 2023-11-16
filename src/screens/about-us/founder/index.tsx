import { Typography } from '@/shared/ui/typography';
import styles from './founder.module.scss';
import Image from 'next/image';
import stubPhoto from '@/shared/assets/img/stub_photo.png';
import { Border } from '@/shared/ui/border';
export const Founder = () => {
  return (
    <section>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={styles.title}>
        Засновник
      </Typography>
      <Typography
        fontWeight={'regular'}
        element={'h5'}
        className={styles.subtitle}>
        благодійного фонду
      </Typography>
      <Border />
      <div className={styles.info}>
        <div className={styles.imageWrapper}>
          <Image src={stubPhoto} alt={'founder image'} />
        </div>
        <div className={styles.textWrapper}>
          <Typography fontWeight={'semiBold'} element={'h5'}>
            Ім&apos;я та прізвище
          </Typography>
          <Typography fontWeight={'regular'} type={'body'} element={'h6'}>
            Lorem ipsum dolor sit amet consectetur. Ornare diam bibendum purus
            non ut facilisis. Hendrerit orci mattis platea porttitor. Sed ipsum
            congue pulvinar turpis. Egestas etiam purus tristique diam etiam
            volutpat semper non. Sed arcu tortor quis natoque amet. Integer
            auctor vivamus blandit feugiat sed in. Turpis vitae convallis eu
            viverra sed etiam semper nibh. Amet sapien et morbi turpis. Commodo
            cras amet euismod sed a quis ut interdum. Tortor enim elit nisl
            morbi urna.
            <br /> Ut enim consequat urna scelerisque. Quam in at consectetur
            neque tempus id diam hendrerit. Quis sed consectetur egestas ac
            rutrum diam. Condimentum nunc in posuere sed morbi arcu. Vitae in
            leo velit senectus justo.
          </Typography>
        </div>
      </div>
    </section>
  );
};
