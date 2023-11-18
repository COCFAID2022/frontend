import Image from 'next/image';
import React from 'react';

import BlueArrow from '../image/arrow-blue.png';
import style from '../NewsSection/News.module.scss';
import MainStyle from '../StyleHelpPage.module.scss';


interface NewsItem {
  news: string;
  description: string;
  date: string;
}

interface NewsLoopProps {
  newsItems: NewsItem[];
}

const escapeHTML = (str: string): string =>
  str.replace(/[&<>"']/g, (tag) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[tag] || tag));

const NewsLoop: React.FC<NewsLoopProps> = ({ newsItems }) => {
  const newsCards = newsItems.map((item) => (
    <article key={item.news} className={style["block-news-cards-items"]}>
      <h4 className={style["block-news-cards-items__title"]}>{escapeHTML(item.news)}</h4>
      <p className={style["block-news-cards-items__description"]}>{escapeHTML(item.description)}</p>
      <div className={style["block-news-cards-items-bottom"]}>
        <p className={style["block-news-cards-items__date"]}>Опубліковано - {escapeHTML(item.date)}</p>
        <Image src={BlueArrow} priority={true} alt={'arrow'} className='block-news-cards-items__arrow'/>
      </div>
    </article>
  ));

  return <div className={`${style["block-news-cards"]} ${MainStyle.flex}`}>{newsCards}</div>;
};

export default NewsLoop;
