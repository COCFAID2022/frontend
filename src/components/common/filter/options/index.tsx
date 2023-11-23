import { FC, useState } from 'react';

import {
  TypeOption,
  TypeSelectedOption,
} from '@/components/common/filter/types';

import { Option } from '../option';
import styles from './options.module.scss';

interface OptionsProps {
  title: string;
  options: TypeOption[];
}

export const Options: FC<OptionsProps> = props => {
  const { options, title } = props;
  const [selectedOption, setSelectedOption] =
    useState<TypeSelectedOption>('asc');

  const handleOptionChange = (type: TypeSelectedOption) =>
    setSelectedOption(type);

  return (
    <div className={styles.options}>
      {options.map(option => (
        <Option
          key={option.value}
          option={option}
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
          title={title}
        />
      ))}
    </div>
  );
};
