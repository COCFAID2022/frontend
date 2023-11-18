import classNames from 'classnames';

import { Department } from '@/screens/about-us/our-team/department/department';
import { Border } from '@/shared/ui/border';
import { Typography } from '@/shared/ui/typography';

import styles from './our-team.module.scss';
import { teamData } from './team-data';
export const OurTeam = () => {
  return (
    <section className={classNames(styles.ourTeam, 'container')}>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={styles.title}>
        Наша команда
      </Typography>

      <Border className={styles.border} />

      {teamData.map(({ workers, description, department }) => {
        return (
          <Department
            key={department}
            department={department}
            description={description}
            workers={workers}
          />
        );
      })}
    </section>
  );
};
