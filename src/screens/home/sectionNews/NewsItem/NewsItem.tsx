import { Button } from '@/shared/ui/button';
import classNames from 'classnames';
import { News } from '../News/News';
import styles from './newsItem.module.scss';

type Props = {
  news: News;
  newClass: boolean;
};
const NewsItem = ({ news, newClass }: Props) => {
  const { id, title, content } = news;

  return (
    <div className={classNames(styles.news, newClass && styles.news_margin)}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.news_content}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className={styles.news_botton}>
          <Button
            shadow={'regular-shadow'}
            // value={''}
            buttonSize={'small'}
            mode={'dark'}
            iconColors={{
              iconColor: 'icon-light',
              main: 'bg-lightBlue',
              active: 'active-bg-blue',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
