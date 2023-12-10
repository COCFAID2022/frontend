import { Descriprion } from './discription';
import { Feedback } from './feedback';
import { Header } from './header';
import { OtherHistory } from './other-history';
import { StoriesOfPeople } from './stories-of-people/storiesOfPeople';

export const SelectedHistoryScreen = () => {
  return (
    <>
      <Header />
      <Descriprion />
      <Feedback />
      <StoriesOfPeople />
      <OtherHistory />
    </>
  );
};
