import { helpVpoItems } from '@/components/screens/help/mock-data';
import { Hero } from '@/components/screens/help-way/hero';

import { Consultation } from './consultation';
import { Direction } from './direction';
import { Equipment } from './equipment';
import { OtherWays } from './slider-other-ways/card-other-ways';

export const HelpWayScreen = () => (
  <>
    <Hero />
    <Equipment />
    <Direction />
    <OtherWays items={helpVpoItems} />
    <Consultation />
  </>
);
