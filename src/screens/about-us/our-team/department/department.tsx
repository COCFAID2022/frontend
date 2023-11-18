import { FC } from 'react';

import { TeamSlider } from '@/screens/about-us/our-team/team-slider/team-slider';
import { Typography } from '@/shared/ui/typography';

import { TypeTeamData } from '../team-data';
import styles from './department.module.scss';

interface DepartmentProps extends TypeTeamData {}

export const Department: FC<DepartmentProps> = props => {
  const { department, workers, description } = props;
  return (
    <div className={styles.department}>
      <div className={styles.info}>
        <Typography className={styles.title} fontWeight={'bold'} element={'h3'}>
          {department}
        </Typography>
        <Typography fontWeight={'regular'} type={'body'} element={'p'}>
          {description}
        </Typography>
      </div>
      <TeamSlider workers={workers} />
    </div>
  );
};
