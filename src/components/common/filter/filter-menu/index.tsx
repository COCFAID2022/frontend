import { filterParams } from '@/components/common/filter/filter-params';
import { Options } from '@/components/common/filter/options';
import { Typography } from '@/components/ui/typography';

import styles from './filter-menu.module.scss';

export const FilterMenu = () => {
  return (
    <div className={styles.filterMenu}>
      {filterParams.map(param => {
        return (
          <div key={param.value} className={styles.filterParam}>
            <Typography
              fontWeight={'semiBold'}
              element={'h6'}
              className={styles.title}>
              {param.value}
            </Typography>

            <Options options={param.options} title={param.value} />
          </div>
        );
      })}
    </div>
  );
};
