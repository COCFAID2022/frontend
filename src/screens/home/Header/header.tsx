import Image from 'next/image';

import Hurt from '../image/hurt-logo.png';
import Mainstyle from '../StyleHelpPage.module.scss';
import style from './Header.module.scss';

export const Header = () => (
  <header className={`${style.header} ${Mainstyle.flex}`}>
    <div className={`${style['header-info']} ${Mainstyle.flex}`}>
      <h1 className={`${style['header-info__title']} ${Mainstyle.flex}`}>
        поміч 2022
      </h1>
      <h4 className={`${style['header-info__subtitle']} ${Mainstyle.flex}`}>
        Благодійний фонд
      </h4>
      <p className={`${style['header-description']} ${Mainstyle.flex}`}>
        {' '}
        Зробіть крок до підтримки наших військових. Приєднуйтесь до нашого
        благодійного фонду та підтримайте тих, хто захищає нас усіх!
      </p>
    </div>
    <div className={`${style['header-img']}`}>
      <Image src={Hurt} priority alt={'hurt'} className={'header-img__hurt'} />
    </div>
  </header>
);
