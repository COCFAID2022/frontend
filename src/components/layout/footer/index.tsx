import classNames from 'classnames';

import { Border } from '@/components/ui/border';
import { Typography } from '@/components/ui/typography';

import { About } from './about';
import styles from './footer.module.scss';
import { Help } from './help';
import { LogoLink } from './logo-link';
import { Partnership } from './partnership';
import { Socials } from './socials';

export const Footer = () => (
  <footer className={classNames(styles.footer, 'container')}>
    <div className={styles.footerWrapper}>
      <LogoLink className={styles.logoLink} />
      <Help className={styles.helpList} />
      <Partnership className={styles.partnershipList} />
      <About className={styles.aboutList} />
      <Socials className={styles.socials} />
    </div>

    <Border className={styles.border} />

    <Typography
      fontWeight={'semiBold'}
      element={'h7'}
      className={styles.copyright}>
      © 2023 | All Rights Reserved
    </Typography>
  </footer>
);
