import { Typography } from '@/shared/ui/typography';
import { Border } from '@/shared/ui/border';
import styles from './our-team.module.scss';
import { teamData } from './team-data';
import { Department } from '@/screens/about-us/our-team/department/department';
export const OurTeam = () => {
  return (
    <section className={styles.ourTeam}>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={styles.title}>
        Наша команда
      </Typography>
      <Border />

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
