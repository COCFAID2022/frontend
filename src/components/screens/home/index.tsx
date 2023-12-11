import { Hero } from '@/components/common/hero';
import { Help } from '@/components/screens/home/help';
import { News } from '@/components/screens/home/news';
import { OurProjects } from '@/components/screens/home/our-projects';
import { Partners } from '@/components/screens/home/partners';

import { Consultation } from './consultation';
import { History } from './history-section/history';
import { Question } from './question-section/question';

export const HomeScreen = () => (
  <>
    <Hero />
    <Partners />
    <Help />
    <OurProjects />
    <History />
    <News />
    <Question />
    <Consultation
      title={' Потрібна консультація?'}
      secondTitle={'Наші менеджери завжди раді Вам допомогти'}
      addBtn={false}
    />
  </>
);
