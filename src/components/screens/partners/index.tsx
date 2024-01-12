import classNames from 'classnames';

import { HeroPartners } from './hero';
import { Partner } from './partner';
import { Sponsors } from './sponsors';
import { sponsorsData } from './sponsors/data';

export const PartnersScreen = () => {
  return (
    <section className={classNames('container')}>
      <HeroPartners />
      <Sponsors data={sponsorsData} slide={6} title={'Спонсори'} />
      <Partner />
    </section>
  );
};
