'use client';
import classNames from 'classnames';
import { Button } from '@/shared/ui/button';
import arrowRightLight from '@/shared/assets/icons/arrowTopRightLight.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './form-info.module.scss';
import { schema, TypeSchema } from './form-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@/shared/ui/typography';

export const FormInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<TypeSchema>({ resolver: yupResolver(schema) });

  const submitFormHandler: SubmitHandler<TypeSchema> = data => {
    console.log(data);
    reset();
  };

  return (
    <form
      className={styles.form_info}
      onSubmit={handleSubmit(submitFormHandler)}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          {...register('fullName')}
          placeholder={"Ім'я та прізвище"}
        />
        {errors.fullName?.message && (
          <Typography
            fontWeight={'semiBold'}
            element={'p'}
            className={styles.error}>
            {errors.fullName.message}
          </Typography>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          {...register('email')}
          placeholder={'Email'}
        />
        {errors.email?.message && (
          <Typography
            fontWeight={'semiBold'}
            type={'body'}
            element={'p'}
            className={styles.error}>
            {errors.email.message}
          </Typography>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          {...register('nationality')}
          placeholder={'Яке у вас громадянство'}
        />
        {errors.nationality?.message && (
          <Typography
            fontWeight={'semiBold'}
            type={'body'}
            element={'p'}
            className={styles.error}>
            {errors.nationality.message}
          </Typography>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <textarea
          {...register('description')}
          className={classNames(styles.input, styles.textarea)}
          placeholder={
            'Які області або проблеми вам цікаві або особливо близькі?'
          }
        />
        {errors.description?.message && (
          <Typography
            fontWeight={'semiBold'}
            type={'body'}
            element={'p'}
            className={styles.error}>
            {errors.description.message}
          </Typography>
        )}
      </div>
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
          text: 'Подати запит',
          element: 'h7',
          fontWeight: 'semiBold',
          color: 'black',
        }}
      />
    </form>
  );
};
