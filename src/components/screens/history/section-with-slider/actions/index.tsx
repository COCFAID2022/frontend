import Image from 'next/image';
import { FC, useState } from 'react';

import { Typography } from '@/components/ui/typography';
import likeIcon from '@/icons/comment.svg';
import commentIcon from '@/icons/like.svg';

import { TypeCardActions } from '../types';
import styles from './actions.module.scss';

interface ActionsProps {
  actions: TypeCardActions;
}
export const Actions: FC<ActionsProps> = props => {
  const { actions } = props;

  const [likeCount] = useState(actions.likesCount);
  const [commentCount] = useState(actions.comments.count);

  return (
    <div className={styles.actions}>
      <button type={'button'} className={styles.action}>
        <Image src={likeIcon} alt={'like'} />
        <Typography element={'h7'} fontWeight={'regular'}>
          {likeCount}
        </Typography>
      </button>
      <button type={'button'} className={styles.action}>
        <Image src={commentIcon} alt={'comment'} />
        <Typography element={'h7'} fontWeight={'regular'}>
          {commentCount}
        </Typography>
      </button>
    </div>
  );
};
