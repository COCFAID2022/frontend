import classNames from 'classnames';

import { Title } from '@/components/common/title';
import { Border } from '@/components/ui/border';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

import ArrowTopLightIcon from '../../../../../public/static/icons/arrowTopRightLight.svg';
import { newsItems } from './data';
import styles from './news.module.scss';

export const News = () => (
  <section className={classNames(styles.news, 'container')}>
    <Title href={'/news'} text={'Новини'} />
    <Typography
      fontWeight={'regular'}
      element={'h5'}
      className={styles.subtitle}>
      Головні новини
    </Typography>

    <Border className={styles.border} />

    <div className={styles.cardSet}>
      {newsItems.splice(0, 6).map(({ title, post, date, id }) => {
        const normalizedDate = new Date(date).toLocaleDateString('tr-TR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        });

        return (
          <div key={id} className={styles.card}>
            <Typography
              fontWeight={'semiBold'}
              element={'h5'}
              className={styles.title}>
              {title}
            </Typography>
            <Typography
              fontWeight={'regular'}
              element={'h6'}
              className={styles.post}>
              {post}
            </Typography>

            <div className={styles.dateWrapper}>
              <Typography
                fontWeight={'regular'}
                element={'h6'}
                className={styles.date}>
                Опубліковано - {normalizedDate}
              </Typography>
              <Button
                variant={'default'}
                size={'sm'}
                icon={{
                  image: ArrowTopLightIcon,
                  variant: 'blue',
                  position: 'right',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
