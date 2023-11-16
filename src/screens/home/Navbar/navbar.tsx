import style from '../StyleHelpPage.module.scss';
export const Navbar = () => {
    return(
         <nav className={style.nav}>
         <img className={style['nav__logo']} src="/image/logo-navbar.png" alt=""/>
             <div className={style["nav-links"]}>
                 <a className={`${style["nav-links__link"]} ${style['active-link']}`} href="#">Про нас </a>
                 <a className={style["nav-links__link"]} href="#">Наші проекти </a>
                 <a className={style["nav-links__link"]} href="#">Як допомогти  </a>
                 <a className={style["nav-links__link"]} href="#">Новини</a>
                 <a className={style["nav-links__link"]} href="#">Навчання</a>
             </div>

             <div className={style.languages}>
             <span className={`${style["languages__ua"]} ${style['active-language']}`}>UA</span>
             <div className={style["languages__split"]}></div>
             <span className={style["languages__en "]}>EN</span>
            </div>
            <div className={style.number}>
                 <p className={style["number__info"]}>Гаряча лінія</p>
                 <a className={style["number__tel"]} href="tel:050 612 45 68">050 612 45 68</a>
            </div>

            <div className={style["number second"]}>
                 <p className={style["number__tel"]}>Підтримати</p>
            </div>
     </nav>
    )
}