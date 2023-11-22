import classNames from 'classnames';

import { Card, Title } from '@/components';
import { Border } from '@/shared/ui/border';
import { Typography } from '@/shared/ui/typography';

import styles from './help.module.scss';
import { helpItems } from './help-items';

export const Help = () => {
  return (
    <section className={classNames('container')}>
      <Title href={'/help'} text={'Допомога'} />
      <Typography
        fontWeight={'regular'}
        element={'h5'}
        className={styles.subtitle}>
        Активні напрямки допомоги
      </Typography>
      <Border className={styles.border} />
      <div className={styles.cards}>
        {helpItems.map(item => {
          return <Card className={styles.card} key={item.id} data={item} />;
        })}
      </div>
    </section>
  );
};
