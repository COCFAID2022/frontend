import classNames from 'classnames';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import IconArrowTopLight from '@/icons/arrowTopRightLight.svg';
import Phone from '@/icons/phone.svg';

import styles from './consultation.module.scss';

export const Consultation = () => (
  <section className={classNames(styles.consultation, 'container')}>
    <div className={styles.consultation__wrap}>
      <div className={styles.consultation__left}>
        <Typography fontWeight={'semiBold'} element={'h3'}>
          Потрібна консультація?
        </Typography>
        <Typography fontWeight={'regular'} element={'p'}>
          Наші менеджери завжди раді Вам допомогти
        </Typography>
      </div>
      <div className={styles.consultation__right}>
        <Button
          variant={'outlined'}
          label={'Гаряча лінія'}
          size={'sm'}
          icon={{
            position: 'left',
            variant: 'blue',
            image: Phone,
          }}
          value={{
            text: '050 612 45 68',
            fontWeight: 'semiBold',
            element: 'h7',
            color: 'blackText',
          }}
        />
        <Button
          variant={'outlined'}
          value={{
            element: 'h7',
            color: 'blackText',
            text: 'Підтримати',
            fontWeight: 'semiBold',
          }}
          size={'sm'}
          icon={{
            variant: 'blue',
            image: IconArrowTopLight,
            position: 'left',
          }}
        />
      </div>
    </div>
  </section>
);
