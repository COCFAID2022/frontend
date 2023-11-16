import style from '../StyleHelpPage.module.scss';
export const Partners = () => {
    return(
        <section className={`${style.partners} ${style.flex}`}>
        <div className={`${style['partners-items']} ${style.flex}`}>
            <h4 className={style['partners-items__title']}>Партнери</h4>
            <div className={`${style['btn-block']} ${style.flex}`}>
                <img src="/image/arrow-left.png" alt=""/>
                <img src="/image/arrow-right.png" alt=""/>
            </div>
        </div>
        <div className={`${style['partners-slider']} ${style.swiper} ${style.flex}`}>
            <div className={`${style["swiper-container"]} ${style.flex}`}>
                <div className={style["swiper-slide"]}>
                    <img className={style["swiper-slide__poster"]} src="/image/poster-privatbank.png" alt=""/>
                </div>
                <div className={style["swiper-slide"]}>
                    <img className={style["swiper-slide__poster"]} src="/image/poster-slider.png" alt=""/>
                </div>
                <div className={style["swiper-slide"]}>
                    <img className={style["swiper-slide__poster"]} src="/image/poster-slider.png" alt=""/>
                </div>
                <div className={style["swiper-slide"]}>
                    <img className={style["swiper-slide__poster"]} src="/image/poster-slider.png" alt=""/>
                </div>
                <div className={style["swiper-slide"]}>
                    <img className={style["swiper-slide__poster"]} src="/image/poster-slider.png" alt=""/>
                </div>
                <div className={style["swiper-slide"]}>
                    <img className={style["swiper-slide__poster"]} src="/image/poster-slider.png" alt=""/>
                </div>
            </div>
        </div>
        <div className={style["block-btns"]}>
            <div className={style["number second"]}>
                <p className={style["number__tel"]}>Стати партнером</p>
           </div>
           <div className={style["number black"]}>
            <p className={style["number__tel"]}>Усі партнери</p>
            </div>
        </div>
    </section>
    )
}