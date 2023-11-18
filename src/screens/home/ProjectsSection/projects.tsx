import style from '../ProjectsSection/Projects.module.scss';
import MainStyle from '../StyleHelpPage.module.scss';
export const Projects = () => {
    return(
        <section className={`${style['block-project']} ${style['block-project']}`}id="block-hepl">
            <div className={style["block-help-header"]}>
                <h2 className={style["block-help-header__title"]}>Наші проекти</h2>
                <p className={style["block-help-header__sibtitle"]}>Активні напрямки допомоги</p>
            </div>
            <hr/>
            <div className={`${style['block-help-cards']} ${MainStyle.flex}`} id="block-project-cards"></div>
        </section>
    )
}