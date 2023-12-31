import Image from 'next/image';
import { FC } from 'react';

import { TypeWorker } from '@/components/screens/about-us/our-team/types';
import { Typography } from '@/components/ui/typography';

import styles from './worker-slide.module.scss';

interface WorkerSlideProps {
  worker: TypeWorker;
}

export const WorkerSlide: FC<WorkerSlideProps> = props => {
  const { worker } = props;
  return (
    <div className={styles.slide}>
      <Image className={styles.image} src={worker.img} alt={'worker image'} />
      <Typography
        fontWeight={'semiBold'}
        element={'h5'}
        className={styles.title}>
        {worker.fullName}
      </Typography>
      <Typography
        fontWeight={'regular'}
        element={'h6'}
        className={styles.subtitle}>
        {worker.position}
      </Typography>
    </div>
  );
};
