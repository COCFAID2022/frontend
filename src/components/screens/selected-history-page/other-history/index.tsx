import classNames from 'classnames';

import { Consultation } from '../../home/consultation';
import style from './otherHistory.module.scss';
// containerWrapper

export const OtherHistory = () => {
  return (
    <section className={classNames(style.containerWrapper)}>
      <Consultation
        title={
          'ПРОЧИТАВШИ ОПИС ВИ МОЖЕТЕ СТАТИ ПАРТНЕРОМ, СПОНСОРОМ, А ТАКОЖ ОДНОРАЗОВО ДОПОМОГТИ'
        }
        addBtn
      />
    </section>
  );
};
