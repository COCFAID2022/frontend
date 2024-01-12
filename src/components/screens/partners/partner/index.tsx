import { Sponsors } from '../sponsors';
import { sponsorsData } from './data';

export const Partner = () => {
  return (
    <Sponsors
      data={sponsorsData}
      slide={12}
      classNames={'imgPrivat'}
      title={'Партнери'}
    />
  );
};
