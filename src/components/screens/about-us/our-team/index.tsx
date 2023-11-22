import classNames from 'classnames';

import { Department } from '@/components/screens/about-us/our-team/department/department';
import { Border } from '@/components/ui/border';
import { Typography } from '@/components/ui/typography';

import styles from './our-team.module.scss';
import { teamData } from './team-data';

export const OurTeam = () => (
  <section className={classNames(styles.ourTeam, 'container')}>
    <Typography fontWeight={'semiBold'} element={'h1'} className={styles.title}>
      Наша команда
    </Typography>

    <Border className={styles.border} />

    {teamData.map(({ workers, description, department }) => (
      <Department
        key={department}
        department={department}
        description={description}
        workers={workers}
      />
    ))}
  </section>
);
