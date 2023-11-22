import style from './history.module.scss';

export const History = () => (
  <section className={style['block-history']} id={'block-hepl'}>
    <div className={style['block-help-header']}>
      <h2 className={style['block-help-header__title']}>Історіїї</h2>
      <p className={style['block-help-header__sibtitle']}>
        Активні напрямки допомоги
      </p>
    </div>
    <hr />
  </section>
);
