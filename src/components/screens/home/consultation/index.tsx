import classNames from 'classnames';
import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import arrowTopRightLight from '@/icons/arrowTopRightLight.svg';
import phoneIcon from '@/icons/phone.svg';

import style from './consultation.module.scss';

interface ConsultationProps {
  title: string;
  secondTitle?: string;
  addBtn: boolean;
}

// if you need third buutton , style will change. See code where use classNames

export const Consultation: FC<ConsultationProps> = props => {
  const { title, secondTitle, addBtn } = props;
  return (
    <section className={classNames('container')}>
      <div
        className={classNames({
          [style.consultation]: !addBtn,
          [style.consultationHistory]: addBtn,
        })}>
        <div className={style.consultationText}>
          <Typography
            fontWeight={'semiBold'}
            element={'h3'}
            className={style.titleHelp}>
            {title}
          </Typography>
          {secondTitle && (
            <Typography fontWeight={'regular'} element={'p'}>
              {secondTitle}
            </Typography>
          )}
        </div>
        <div
          className={classNames({
            [style.btnHelp]: !addBtn,
            [style.btnHelpHistory]: addBtn,
          })}>
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
          {addBtn && (
            <Button
              variant={'outlined'}
              size={'sm'}
              icon={{
                position: 'left',
                variant: 'black',
                image: arrowTopRightLight,
              }}
              value={{
                text: 'Стати партнером',
                fontWeight: 'semiBold',
                element: 'h7',
                color: 'black',
              }}
            />
          )}
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
