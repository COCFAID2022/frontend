import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import sliderLeft from '../../../../public/static/icons/slider-left.svg';
import sliderRight from '../../../../public/static/icons/slider-right.svg';
import styles from './slider-navigation-buttons.module.scss';

interface SliderNavigationButtonsProps {
  onClickPrevSlide: () => void;
  onClickNextSlide: () => void;
  className?: string;
}

export const SliderNavigationButtons: FC<
  SliderNavigationButtonsProps
> = props => {
  const { onClickPrevSlide, onClickNextSlide, className = '' } = props;

  return (
    <div className={classNames(styles.navigationButtons, className)}>
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
