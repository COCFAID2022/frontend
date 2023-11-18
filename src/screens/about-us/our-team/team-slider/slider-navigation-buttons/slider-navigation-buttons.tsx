import Image from 'next/image';
import { FC } from 'react';

import sliderLeft from '@/shared/assets/icons/slider-left.svg';
import sliderRight from '@/shared/assets/icons/slider-right.svg';

import styles from './slider-navigation-buttons.module.scss';

interface SliderNavigationButtonsProps {
  onClickPrevSlide: () => void;
  onClickNextSlide: () => void;
}

export const SliderNavigationButtons: FC<
  SliderNavigationButtonsProps
> = props => {
  const { onClickPrevSlide, onClickNextSlide } = props;
  return (
    <div className={styles.navigationButtons}>
      <button
        type={'button'}
        onClick={onClickPrevSlide}
        className={styles.button}>
        <Image src={sliderLeft} alt={'arrow-left'} />
      </button>
      <button
        type={'button'}
        onClick={onClickNextSlide}
        className={styles.button}>
        <Image src={sliderRight} alt={'arrow-right'} />
      </button>
    </div>
  );
};
