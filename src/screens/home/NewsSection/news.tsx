import style from '../StyleHelpPage.module.scss';
export const News = () => {
    return(
        <section className={style['block-news']}id="block-hepl">
            <div className={style["block-help-header"]}>
                <h2 className={style["block-help-header__title"]}>Наші проекти</h2>
                <p className={style["block-help-header__sibtitle"]}>Активні напрямки допомоги</p>
            </div>
            <hr/>
            <div className={`${style['block-help-cards']} ${style.flex}`} id="block-news-cards"></div>
        </section>
    )
}