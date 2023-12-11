// eslint-disable-next-line check-file/folder-naming-convention
import classNames from 'classnames';

import { Typography } from '@/components/ui/typography';

import { StoriesSlider } from './cart-slider/storiesSlider';
import { FilterStory } from './filterStory/filterStory';
import { storiesData } from './storiesData';
import style from './storiesOfHelp.module.scss';

export const StoriesOfHelp = () => {
  return (
    <section className={classNames('container', style.section)}>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={style.title}>
        Історії допомоги
      </Typography>
      <FilterStory />
      <StoriesSlider data={storiesData} />
    </section>
  );
};
