import styles from './slide.module.scss';
import { Button } from '@/shared/ui/button';
import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface SlideProps {
  slideData: any;
}

export const Slide: FC<SlideProps> = props => {
  const { slideData } = props;

  return (
    <div className={classNames(styles.slide)}>
      <Image
        src={slideData.image}
        width={374}
        height={446}
        className={classNames(styles.image)}
        alt='slide'
      />
      <div className={styles.info}>
        <h3>{slideData.projectName}</h3>
        <p>{slideData.description}</p>
      </div>
      <div className={styles.buttons}>
        <Button
          shadow={'regular-shadow'}
          value={'Підтримати'}
          iconColors={{
            iconColor: 'icon-dark',
            main: 'bg-blue',
            active: 'active-bg-to-light-blue',
          }}
          mode={'dark'}
          buttonSize={'small'}
        />
        <Button
          shadow={'regular-shadow'}
          iconColors={{
            iconColor: 'icon-dark',
            main: 'bg-blue',
            active: 'active-bg-to-light-blue',
          }}
          mode={'transparent'}
          buttonSize={'small'}
          value={'Деталі проекту'}
        />
      </div>
    </div>
  );
};
