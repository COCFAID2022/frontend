import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import arrowTopRightLight from '@/shared/assets/icons/arrowTopRightLight.svg';
import phoneIcon from '@/shared/assets/icons/phone.svg';
import burgerIcon from '@/shared/assets/img/burger-menu.png';
import headerLogo from '@/shared/assets/img/header_logo-blue.png';
import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';
import { LangSwitcher } from '@/widgets/header/lang-switcher';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={classNames(styles.header, 'container')}>
      <Image src={headerLogo} className={styles.logo} alt={'header_logo'} />

      <nav className={styles.navigation}>
        <Link href={'/about-us'} className={styles.link}>
          <Typography fontWeight={'semiBold'} element={'h7'}>
            Про нас
          </Typography>
        </Link>
        <Link href={'/our-projects'} className={styles.link}>
          <Typography fontWeight={'semiBold'} element={'h7'}>
            Наші проекти
          </Typography>
        </Link>
        <Link href={'/how-to-help'} className={styles.link}>
          <Typography fontWeight={'semiBold'} element={'h7'}>
            Як допомогти
          </Typography>
        </Link>
        <Link href={'/news'} className={styles.link}>
          <Typography fontWeight={'semiBold'} element={'h7'}>
            Новини
          </Typography>
        </Link>
        <Link href={'/teaching'} className={styles.link}>
          <Typography fontWeight={'semiBold'} element={'h7'}>
            Навчання
          </Typography>
        </Link>
      </nav>

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
};
