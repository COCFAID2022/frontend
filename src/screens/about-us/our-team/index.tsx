import { Typography } from '@/shared/ui/typography';
import { Border } from '@/shared/ui/border';
import styles from './our-team.module.scss';
import { teamData } from './team-data';
import { Department } from '@/screens/about-us/our-team/department/department';
import classNames from 'classnames';
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
