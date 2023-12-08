import 'swiper/css';
import 'swiper/css/navigation';

import classNames from 'classnames';
import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import arrowTopRightLight from '@/icons/arrowTopRightLight.svg';

import styles from './direction.module.scss';
import { DirectionSlider } from './direction-slider';
import { imgData } from './imgData';
import { DirectionType } from './types/DirectionType';

interface DirectionSliderProps {
  imgData: DirectionType[];
}

export const Direction: FC<DirectionSliderProps> = () => (
  <section className={classNames(styles.direction, 'container')}>
    <div className={styles.flexContainer}>
      <div className={styles.directionLeft}>
        <Typography
          fontWeight={'semiBold'}
          element={'h1'}
          className={styles.title}>
          Про напрямок
        </Typography>
        <Typography
          fontWeight={'semiBold'}
          element={'h5'}
          className={styles.subtitle}>
          Найбільш критичною проблемою медичних установ на деокупованих
          територіях є повна або часткова відсутність не лише медичного
          обладнання (у зв’язку з його знищенням та вивезенням російськими
          військами), але й відсутність меблів, сантехніки та автотранспорту.
        </Typography>
        <Typography
          fontWeight={'regular'}
          element={'p'}
          className={styles.text}>
          Велика частина лікарень зазнала руйнувань та потребує комплексного
          відновлення. Проблема погіршується відсутністю електропостачання,
          водопостачання та опалення. Місцеве населення не має можливості
          отримати елементарну медичну допомогу.Саме тому ми взяли курс на
          забезпечення лікарень першочерговим обладнанням.
          <br />
          <br />
          Ми допомогли 80 лікарням, серед яких Краматорська, Криворізька,
          Апостолівська, Нововоронцовська, Чугуївська і Бердичівська лікарні, а
          також кардіологічні й онкологічні центри, та будемо допомагати, допоки
          це буде необхідно.
          <br />
          <br />
          Допоможіть українцям на деокупованих та прифронтових територіях
          отримати якісну медичну допомогу!
        </Typography>
        <div className={styles.wrapBtns}>
          <Button
            variant={'outlined'}
            size={'sm'}
            icon={{
              variant: 'blue',
              position: 'left',
              image: arrowTopRightLight,
            }}
            value={{
              text: 'Підтримати',
              color: 'blackText',
              fontWeight: 'semiBold',
              element: 'h7',
            }}
          />
          <Button
            variant={'outlined'}
            value={{
              element: 'h7',
              color: 'blackText',
              text: 'Стати партнером',
              fontWeight: 'semiBold',
            }}
            size={'sm'}
            icon={{
              variant: 'black',
              image: arrowTopRightLight,
              position: 'left',
            }}
          />
        </div>
      </div>
      <div className={styles.direction__right}>
        <DirectionSlider imgData={imgData} />
      </div>
    </div>
  </section>
);
