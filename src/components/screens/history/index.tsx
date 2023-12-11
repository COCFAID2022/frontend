import { peopleHistory, storiesOfCities } from './data';
import { SectionWithSlider } from './section-with-slider';

export const HistoryScreen = () => {
  return (
    <div>
      <div style={{ marginBottom: '60px' }} />
      <SectionWithSlider
        data={peopleHistory}
        title={'Історії людей'}
        haveFilter
      />
      <SectionWithSlider
        data={storiesOfCities}
        title={'Історії міст України, які постраждали від війни'}
        haveFilter
      />
    </div>
  );
};
