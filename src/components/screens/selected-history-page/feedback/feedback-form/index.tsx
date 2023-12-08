'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

import arrowRightLight from '../../../../../../public/static/icons/arrowTopRightLight.svg';
import style from './feedback-form.module.scss';

type Inputs = {
  name: string;
  feedback: string;
};

export function FeedbackForm() {
  const [isForm, setIsForm] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);

    setIsForm(false);
    setValue('name', '');
    setValue('feedback', '');
  };

  return (
    <div className={style.feedbackWrapper}>
      <Button
        onClick={() => setIsForm(true)}
        buttonType={'button'}
        variant={'outlined'}
        size={'sm'}
        icon={{
          variant: isForm ? 'gray' : 'blue',
          image: arrowRightLight,
          position: 'left',
        }}
        value={{
          text: 'Залишити відгук',
          element: 'h7',
          fontWeight: 'semiBold',
          color: 'black',
        }}
      />

      {isForm && (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <Typography
            fontWeight={'semiBold'}
            element={'h1'}
            className={style.title}>
            Залишити відгук
          </Typography>

          {errors.name && (
            <span className={style.error}>This field is required</span>
          )}
          <input
            className={style.name}
            placeholder={"Ім'я"}
            {...register('name', { required: true })}
          />

          {errors.feedback && (
            <span className={style.error}>This field is required</span>
          )}
          <textarea
            className={style.feedback}
            rows={8}
            placeholder={'Відгук'}
            {...register('feedback', { required: true })}
          />

          <div className={style.buttonWraper}>
            <Button
              buttonType={'submit'}
              variant={'outlined'}
              size={'sm'}
              icon={{
                variant: 'blue',
                image: arrowRightLight,
                position: 'left',
              }}
              value={{
                text: 'Відправити',
                element: 'h7',
                fontWeight: 'semiBold',
                color: 'black',
              }}
            />

            <Button
              onClick={() => setIsForm(false)}
              buttonType={'button'}
              variant={'outlined'}
              size={'sm'}
              icon={{
                variant: 'black',
                image: arrowRightLight,
                position: 'left',
              }}
              value={{
                text: 'Відміна',
                element: 'h7',
                fontWeight: 'semiBold',
                color: 'black',
              }}
            />
          </div>
        </form>
      )}
    </div>
  );
}
