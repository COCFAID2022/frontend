// eslint-disable-next-line check-file/folder-naming-convention
import classNames from 'classnames';
import Image from 'next/image';

import filter from '../../../../../../public/static/icons/filter.svg';
import style from './filterStory.module.scss';

export const FilterStory = () => {
  return (
    <div className={style.filter_box}>
      <p className={style.filter_title}>Фільтр</p>
      <button
        type={'button'}
        className={classNames(style.btnIcon, style.filter_button)}>
        <Image src={filter} alt={'icon'} />
      </button>
    </div>
  );
};
