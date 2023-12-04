import classNames from 'classnames';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import arrowTopRightLight from '@/icons/arrowTopRightLight.svg';
import phoneIcon from '@/icons/phone.svg';

import style from './consultation.module.scss';

export const Consultation = () => {
  return (
    <section className={classNames('container')}>
      <div className={style.consultation}>
        <div className={style.consultationText}>
          <Typography
            fontWeight={'semiBold'}
            element={'h3'}
            className={style.titleHelp}>
            Потрібна консультація?
          </Typography>
          <Typography fontWeight={'regular'} element={'p'}>
            Наші менеджери завжди раді Вам допомогти
          </Typography>
        </div>
        <div className={style.btnHelp}>
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
      </div>
    </section>
  );
};
