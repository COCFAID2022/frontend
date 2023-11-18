import Mainstyle from '../StyleHelpPage.module.scss';
import style from '../Header/Header.module.scss';
export const Header = () => {
    return(
     <header className={`${style.header} ${Mainstyle.flex}`}>
     <div className={`${style['header-info']} ${Mainstyle.flex}`}>
         <h1 className={`${style['header-info__title']} ${Mainstyle.flex}`}>поміч 2022</h1>
         <h4 className={`${style['header-info__subtitle']} ${Mainstyle.flex}`}>Благодійний фонд</h4>
         <p className={`${style['header-description']} ${Mainstyle.flex}`}> Зробіть крок до підтримки наших військових. Приєднуйтесь до нашого благодійного фонду та підтримайте тих, хто захищає нас усіх!</p>
     </div>
     <div className={`${style["header-img"]}`}>
        
         <img src="/image/hurt-logo.png" className={`${style["header-img__hurt"]}`} alt="hurt"/>
     </div>
     
 </header>
    )
}