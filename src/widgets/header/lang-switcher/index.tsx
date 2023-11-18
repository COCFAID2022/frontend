import { Typography } from '@/shared/ui/typography';

import styles from './lang-switcher.module.scss';

export const LangSwitcher = () => (
  <div className={styles.langSwitcher}>
    <button type={'button'}>
      <Typography fontWeight={'semiBold'} element={'h7'}>
        UA
      </Typography>
    </button>
    <div className={styles.decore} />
    <button type={'button'}>
      <Typography fontWeight={'semiBold'} element={'h7'}>
        EN
      </Typography>
    </button>
  </div>
);
