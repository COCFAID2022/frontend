import { Hero } from '@/components/common/hero';
import { Help } from '@/components/screens/home/help';
import { News } from '@/components/screens/home/news';
import { OurProjects } from '@/components/screens/home/our-projects';
import { Partners } from '@/components/screens/home/partners';

export const HomeScreen = () => (
  <>
    <Hero />
    <Partners />
    <Help />
    <OurProjects />
    <News />
  </>
);
