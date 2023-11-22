import { FC } from 'react';

import { TypeOption, TypeSelectedOption } from '@/components/filter/types';

import styles from './option.module.scss';

interface OptionProps {
  option: TypeOption;
  handleOptionChange: (type: TypeSelectedOption) => void;
  selectedOption: TypeSelectedOption;
  title: string;
}

export const Option: FC<OptionProps> = props => {
  const { selectedOption, option, handleOptionChange, title } = props;
  const { value, type } = option;

  const id = `${title}-${type}`;

  return (
    <div className={styles.option}>
      <label htmlFor={id} key={id} className={styles.customCheckbox}>
        <input
          className={styles.checkboxInput}
          id={id}
          type={'checkbox'}
          name={id}
          value={value}
          checked={selectedOption === type}
          onChange={() => handleOptionChange(type)}
        />
        <span className={styles.customCheckmark} />
        {option.value}
      </label>
    </div>
  );
};
