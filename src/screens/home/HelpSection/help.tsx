import MainStyle from '../StyleHelpPage.module.scss';
import style from '../HelpSection/Help.module.scss';
// import script from '../ScriptPageHelp.module'
export const Help = () => {
    return(
        <section className={style['block-help']}id="block-hepl">
            <div className={style["block-help-header"]}>
                <h2 className={style["block-help-header__title"]}>Допомога</h2>
                <p className={style["block-help-header__sibtitle"]}>Активні напрямки допомоги</p>
            </div>
            <hr/>
            <div className={`${style['block-help-cards']} ${MainStyle.flex}`} id="block-help-cards"></div>
        </section>
    )
}