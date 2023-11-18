import { Slider } from '@/screens/home/our-projects/slider/slider';
import { SectionTitle } from '@/shared/ui/section-title';

import styles from './our-projects.module.scss';

export const OurProjects = () => {
  return (
    <section className={styles.ourProjects}>
      <SectionTitle
        variant={'dark'}
        position={'right'}
        cls={styles.sectionTitleSpace}>
        НАШІ ПРОЕКТИ
      </SectionTitle>

      <Slider />
    </section>
  );
};
