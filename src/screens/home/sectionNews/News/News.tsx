'use client';

import { SectionTitle } from '@/shared/ui/section-title';
import NewsItem from '../NewsItem/NewsItem';

import classNames from 'classnames';
import styles from './news.module.scss';
import { useMatchMedia } from '@/shared/hooks/use-match-media';

export type News = {
  id: number;
  title: string;
  content: string;
};

const dataNews: News[] = [
  {
    id: 1,
    title: 'Назва новини',
    content:
      'Краткое описание новости пппп Краткое описание новости ппппппп пп пппппппп пКраткое описание новости Краткое описание новости',
  },
  {
    id: 2,
    title: 'Назва новини',
    content:
      'Краткое описание новости пппп Краткое описание новости ппппппп пп пппппппп пКраткое описание новости Краткое описание новости',
  },
  {
    id: 3,
    title: 'Назва новини',
    content:
      'Краткое описание новости пппп Краткое описание новости ппппппп пп пппппппп пКраткое описание новости Краткое описание новости',
  },
  {
    id: 4,
    title: 'Назва новини',
    content:
      'Краткое описание новости пппп Краткое описание новости ппппппп пп пппппппп пКраткое описание новости Краткое описание новости',
  },
  {
    id: 5,
    title: 'Назва новини',
    content:
      'Краткое описание новости пппп Краткое описание новости ппппппп пп пппппппп пКраткое описание новости Краткое описание новости',
  },
  {
    id: 6,
    title: 'Назва новини',
    content:
      'Краткое описание новости пппп Краткое описание новости ппппппп пп пппппппп пКраткое описание новости Краткое описание новости',
  },
  {
    id: 7,
    title: 'Назва новини',
    content:
      'Краткое описание новости пппп Краткое описание новости ппппппп пп пппппппп пКраткое описание новости Краткое описание новости',
  },
  {
    id: 8,
    title: 'Назва новини',
    content:
      'Краткое описание новости пппп Краткое описание новости ппппппп пп пппппппп пКраткое описание новости Краткое описание новости',
  },
];

const version = (
  isDesktop: boolean,
  isMobile: boolean,
  isTablet: boolean
): number => {
  if (isDesktop) return 3;
  if (isMobile) return 1;
  if (isTablet) return 2;
  return 1;
};
const News = () => {
  const { isDesktop, isMobile, isTablet } = useMatchMedia();
  const result = version(isDesktop, isMobile, isTablet);

  const newClasses = (result: number, index: number): boolean => {
    // шукаемо ціле число від діління
    const evenNoteven = index / result;
    //Math.trunc(index / result);
    if (Math.trunc(evenNoteven) % 2) {
    
      if (index === result) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <section id='news_section' className={styles.news_section}>
      <SectionTitle
        variant={'light'}
        position={'right'}
        cls={styles.sectionTitleSpace}>
        НОВИНИ
      </SectionTitle>
      <ul className={classNames(styles.news_list, styles.container_newsList)}>
        {dataNews.map((news, index) => (
          <li key={news.id}>
            <NewsItem news={news} newClass={newClasses(result, index)} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;
