import classNames from 'classnames';

import { Typography } from '@/components/ui/typography';

import { StoriesSlider } from './cart-slider/storiesSlider';
import { storiesData } from './storiesData';
import style from './storiesOfPeople.module.scss';

export const StoriesOfPeople = () => {
  return (
    <section className={classNames('container', style.section)}>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={classNames(style.title, style.title_first)}>
        Історії людей
      </Typography>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={classNames(style.title, style.title_second)}>
        Інші історії
      </Typography>

      <StoriesSlider data={storiesData} />
    </section>
  );
};
