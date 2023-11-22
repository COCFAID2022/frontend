import { FC } from 'react';

import { Title } from '@/components';
import { Filter } from '@/components/filter';
import { Typography } from '@/shared/ui/typography';

import styles from './heading.module.scss';

interface HeadingProps {
  title: {
    href: string;
    text: string;
  };
  subTitle: string;
}

export const Heading: FC<HeadingProps> = props => {
  const { subTitle, title } = props;
  return (
    <div className={styles.topBox}>
      <div className={styles.titles}>
        <Title href={title.href} text={title.text} className={styles.title} />
        <Typography
          fontWeight={'regular'}
          element={'h5'}
          className={styles.subtitle}>
          {subTitle}
        </Typography>
      </div>
      <Filter />
    </div>
  );
};
