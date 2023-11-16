import style from '../StyleHelpPage.module.scss';
// import script from '../ScriptPageHelp.module'
export const History = () => {
    return(
        <section className={style['block-history']}id="block-hepl">
            <div className={style["block-help-header"]}>
                <h2 className={style["block-help-header__title"]}>Допомога</h2>
                <p className={style["block-help-header__sibtitle"]}>Активні напрямки допомоги</p>
            </div>
            <hr/>
            
        </section>
    )
}