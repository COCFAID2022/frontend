import classNames from 'classnames';
import { FC } from 'react';

import { Slider } from '@/screens/help/cards-section/slider';
import { TypeCardData } from '@/shared/types/card-section';

import { Card } from '../../../../components/card';
import { SliderNavigationButtons } from '../../../../components/slider-navigation-buttons';
import styles from './cards.module.scss';

interface CardsProps {
  slider: boolean;
  items: TypeCardData[];
  progress?: boolean;
  ended?: boolean;
}

export const Cards: FC<CardsProps> = props => {
  const { slider, items, progress = false, ended = false } = props;
  const onClickPrevSlide = () => 1;
  const onClickNextSlide = () => 1;

  return (
    <div
      className={classNames({
        [styles.cards]: !slider,
      })}>
      {slider ? (
        <div>
          <SliderNavigationButtons
            className={styles.navBtns}
            onClickPrevSlide={onClickPrevSlide}
            onClickNextSlide={onClickNextSlide}
          />
          <Slider items={items} progress={progress} />
        </div>
      ) : (
        items.map(item => {
          return (
            <Card
              key={item.id}
              data={item}
              progress={progress}
              className={styles.card}
              ended
            />
          );
        })
      )}
    </div>
  );
};
