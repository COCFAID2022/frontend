import style from '../StyleHelpPage.module.scss';
export const Header = () => {
    return(
     <header className={`${style.header} ${style.flex}`}>
     <div className={`${style['header-info']} ${style.flex}`}>
         <h1 className={`${style['header-info__title']} ${style.flex}`}>поміч 2022</h1>
         <h4 className={`${style['header-info__subtitle']} ${style.flex}`}>Благодійний фонд</h4>
         <p className={`${style['header-description']} ${style.flex}`}> Зробіть крок до підтримки наших військових. Приєднуйтесь до нашого благодійного фонду та підтримайте тих, хто захищає нас усіх!</p>
     </div>
     <div className={`${style["header-img"]}`}>
         <img src="/image/hurt-logo.png" className={`${style["header-img__hurt"]}`} alt="hurt"/>
     </div>
     
 </header>
    )
}