import Image from 'next/image';

import ArrowLeft from '../image/arrow-left.png';
import ArrowRight from '../image/arrow-right.png';
import PrivatBankPoster from '../image/poster-privatbank.png';
import SliderPoster from '../image/poster-slider.png';
import MainStyle from '../StyleHelpPage.module.scss';
import style from './Partners.module.scss';

export const Partners = () => (
  <section className={`${style.partners} ${MainStyle.flex}`}>
    <div className={`${style['partners-items']} ${MainStyle.flex}`}>
      <h4 className={style['partners-items__title']}>Партнери</h4>
      <div className={`${style['btn-block']} ${MainStyle.flex}`}>
        <Image src={ArrowLeft} priority alt={'arrowLeft'} className={''} />
        <Image src={ArrowRight} priority alt={'arrowLeft'} className={''} />
      </div>
    </div>
    <div
      className={`${style['partners-slider']} ${style.swiper} ${MainStyle.flex}`}>
      <div className={`${style['swiper-container']} ${MainStyle.flex}`}>
        <div className={style['swiper-slide']}>
          <Image
            src={PrivatBankPoster}
            priority
            alt={'poster'}
            className={'swiper-slide__poster'}
          />
        </div>
        <div className={style['swiper-slide']}>
          <Image
            src={SliderPoster}
            priority
            alt={'poster'}
            className={'swiper-slide__poster'}
          />
        </div>
        <div className={style['swiper-slide']}>
          <Image
            src={SliderPoster}
            priority
            alt={'poster'}
            className={'swiper-slide__poster'}
          />
        </div>
        <div className={style['swiper-slide']}>
          <Image
            src={SliderPoster}
            priority
            alt={'poster'}
            className={'swiper-slide__poster'}
          />
        </div>
        <div className={style['swiper-slide']}>
          <Image
            src={SliderPoster}
            priority
            alt={'poster'}
            className={'swiper-slide__poster'}
          />
        </div>
        <div className={style['swiper-slide']}>
          <Image
            src={SliderPoster}
            priority
            alt={'poster'}
            className={'swiper-slide__poster'}
          />
        </div>
      </div>
    </div>
    <div className={style['block-btns']}>
      <div className={style['number second']}>
        <p className={style.number__tel}>Стати партнером</p>
      </div>
      <div className={style['number black']}>
        <p className={style.number__tel}>Усі партнери</p>
      </div>
    </div>
  </section>
);
