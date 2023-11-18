import React from 'react';

import style from '../NewsSection/News.module.scss';
import MainStyle from '../StyleHelpPage.module.scss';
import NewsLoop from './NewsLoop'; 

const News: React.FC = () => {
    const newsItem = [
      {
          news:'Доставили близько 400 автівок військовослужбовцям...',
          description:'Медикаменти та протези для забезпечення нагальних потреб військовослужбовців після реабілітації',
          date:'29.10.23'
      },
      {
          news:'Доставили близько 400 автівок військовослужбовцям...',
          description:'Медикаменти та протези для забезпечення нагальних потреб військовослужбовців після реабілітації',
          date:'29.10.23'
      },
      {
          news:'Доставили близько 400 автівок військовослужбовцям...',
          description:'Медикаменти та протези для забезпечення нагальних потреб військовослужбовців після реабілітації',
          date:'29.10.23'
      },
      {
          news:'Доставили близько 400 автівок військовослужбовцям...',
          description:'Медикаменти та протези для забезпечення нагальних потреб військовослужбовців після реабілітації',
          date:'29.10.23'
      },
      {
          news:'Доставили близько 400 автівок військовослужбовцям...',
          description:'Медикаменти та протези для забезпечення нагальних потреб військовослужбовців після реабілітації',
          date:'29.10.23'
      },
      {
          news:'Доставили близько 400 автівок військовослужбовцям...',
          description:'Медикаменти та протези для забезпечення нагальних потреб військовослужбовців після реабілітації',
          date:'29.10.23'
      },
    ];
    return(
        <section className={style['block-news']}id="block-hepl">
            <div className={style["block-help-header"]}>
                <h2 className={style["block-help-header__title"]}>Наші проекти</h2>
                <p className={style["block-help-header__sibtitle"]}>Активні напрямки допомоги</p>
            </div>
            <hr/>
            <NewsLoop newsItems={newsItem}  />
        </section>
    )
}

export default News;
