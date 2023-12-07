import classNames from 'classnames';

import { Card } from '@/components/common/card';
import { Title } from '@/components/common/title';
import { Border } from '@/components/ui/border';
import { Typography } from '@/components/ui/typography';

import styles from './our-projects.module.scss';
import { ourProjectsItems } from './our-projects-items';

export const OurProjects = () => {
  return (
    <section className={classNames('container')}>
      <Title href={'/our-projects'} text={'Наші проекти'} />
      <Typography
        fontWeight={'regular'}
        element={'h5'}
        className={styles.subtitle}>
        Активні напрямки допомоги
      </Typography>
      <Border className={styles.border} />
      <div className={styles.cards}>
        {ourProjectsItems.map(item => {
          return (
            <Card
              className={{ wrapper: styles.card }}
              key={item.id}
              data={item}
              progress
            />
          );
        })}
      </div>
    </section>
  );
};
