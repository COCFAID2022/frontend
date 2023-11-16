import styles from './form.module.scss';
import { Typography } from '@/shared/ui/typography';
import Image from 'next/image';
import ua_map from '@/shared/assets/img/ua_map.png';
import { FormInfo } from '@/screens/about-us/form/form-info';

export const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.info}>
        <Typography
          fontWeight={'semiBold'}
          element={'h3'}
          className={styles.title}>
          Якщо бажаєте стати частиною нашої команди?
        </Typography>
        <Typography
          fontWeight={'regular'}
          element={'h6'}
          className={styles.subtitle}>
          Ми з радістю розглянемо та запросимо до нашої команди!
        </Typography>
        <div className={styles.ua}>
          <Image src={ua_map} alt={'ua map'} />
          <Typography
            fontWeight={'bold'}
            element={'h3'}
            className={styles.ua_title}>
            Ми працюємо <span>по всій Україні</span>
          </Typography>
        </div>
      </div>
      <FormInfo />
    </div>
  );
};
