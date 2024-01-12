import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

import buttonIconLight from '../../../../../public/static/icons/arrowTopRightLight.svg';
import img from '../../../../../public/static/images/UkraineHeart.png';
import styles from './hero-partners.module.scss';

export const HeroPartners = () => {
  return (
    <div className={styles.wraperHero}>
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

        <div className={styles.supportWraper}>
          <Link href={'/support'}>
            <Button
              variant={'outlined'}
              value={{
                text: 'Підтримати',
                fontWeight: 'semiBold',
                color: 'blackText',
                element: 'h7',
              }}
              size={'sm'}
              icon={{
                variant: 'blue',
                position: 'left',
                image: buttonIconLight,
              }}
            />
          </Link>
          <Button
            variant={'outlined'}
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
              color: 'blackText',
            }}
          />
        </div>
      </div>
      <Image className={styles.image} src={img} alt={'heart'} />
    </div>
  );
};
