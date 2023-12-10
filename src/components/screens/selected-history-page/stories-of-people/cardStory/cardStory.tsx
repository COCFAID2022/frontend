// eslint-disable-next-line check-file/folder-naming-convention
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import { Button } from '@/components/ui/button';

import arrowRightLight from '../../../../../../public/static/icons/arrowTopRightLight.svg';
import message from '../../../../../../public/static/icons/message.svg';
import heard from '../../../../../../public/static/icons/Vector.svg';
import { StoriesType } from '../types/StoriesType';
import style from './cardStory.module.scss';

interface CardProps extends StoriesType {}

export const CardStory: FC<CardProps> = ({
  id,
  videoURL,
  title,
  text,
  like,
  massege,
}) => {
  const [count, setCount] = useState<number>(like);

  const increment = () => {
    setCount(prevCount => {
      return prevCount + 1;
    });
  };

  return (
    <li className={style.item} key={id}>
      <div className={style.video}>
        <video controls width={'100%'} height={'auto'}>
          <track
            kind={'captions'}
            label={'Українські субтитри'}
            src={'субтитри.vtt'}
            default
          />
          <source src={videoURL} type={'video/mp4'} /> Your browser does not
          support the video tag.
        </video>
      </div>
      <div className={style.description}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
      </div>
      <div className={style.all_button_box}>
        <div className={style.button_box}>
          <Link href={'/support'}>
            <Button
              buttonType={'button'}
              variant={'outlined'}
              size={'sm'}
              icon={{
                variant: 'blue',
                image: arrowRightLight,
                position: 'left',
              }}
              value={{
                text: 'Підтримати',
                element: 'h7',
                fontWeight: 'semiBold',
                color: 'black',
              }}
            />
          </Link>
          <Button
            buttonType={'button'}
            variant={'outlined'}
            size={'sm'}
            icon={{
              variant: 'black',
              image: arrowRightLight,
              position: 'left',
            }}
            value={{
              text: 'Детальніше',
              element: 'h7',
              fontWeight: 'semiBold',
              color: 'black',
            }}
          />
        </div>
        <div className={style.like_message_box}>
          <button
            type={'button'}
            className={classNames(style.btnIcon, style.like_box)}
            onClick={increment}>
            <Image src={heard} alt={'icon'} /> {count}
          </button>
          <button
            type={'button'}
            className={classNames(style.btnIcon, style.message_box)}>
            <Image src={message} alt={'icon'} /> {massege}
          </button>
        </div>
      </div>
    </li>
  );
};
