import { Hero } from '@/components/common/hero';
import { CardsSection } from '@/components/screens/help/cards-section';
import { helpVpoItems } from '@/components/screens/help/mock-data';

export const HelpScreen = () => {
  return (
    <>
      <Hero />
      <CardsSection
        title={{ text: 'Допомога ВПО', href: '/help-vpo' }}
        subTitle={'Активні напрямки допомоги'}
        slider
        items={helpVpoItems}
      />
      <CardsSection
        title={{ text: 'Допомога людям з інвалідністю', href: '/help-people' }}
        subTitle={'Активні напрямки допомоги'}
        slider
        items={helpVpoItems}
      />
      <CardsSection
        title={{
          text: 'Допомога людям похилого віку',
          href: '/help-people-old',
        }}
        subTitle={'Активні напрямки допомоги'}
        slider
        items={helpVpoItems}
      />
      <CardsSection
        title={{
          text: 'Допомога безхатькам',
          href: '/help-people-without-home',
        }}
        subTitle={'Активні напрямки допомоги'}
        slider
        items={helpVpoItems}
      />
      <CardsSection
        title={{
          text: 'Допомога',
          href: '/help-end',
        }}
        subTitle={'Завершені напрямки допомоги'}
        slider={false}
        items={helpVpoItems}
        ended
      />
    </>
  );
};
