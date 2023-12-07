import classNames from 'classnames';

import { Card } from '@/components/common/card';
import { data } from '@/components/screens/about-us/fond-help/data';
import { Border } from '@/components/ui/border';
import { Typography } from '@/components/ui/typography';

import styles from './fond-help.module.scss';

export const FondHelp = () => {
  return (
    <section className={classNames('container', styles.fondHelp)}>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={styles.title}>
        Кому допомагає фонд
      </Typography>
      <Border className={styles.border} />
      <div className={styles.cards}>
        {data.map(item => {
          return (
            <Card
              data={item}
              key={item.id}
              className={{
                wrapper: styles.card,
                description: styles.cardDescription,
                image: styles.image,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};
