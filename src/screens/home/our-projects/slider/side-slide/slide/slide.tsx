import Image from 'next/image';
import { FC } from 'react';

import styles from './slide.module.scss';

interface SlideProps {
  item: {
    image: string;
    projectName: string;
  };
}

export const Slide: FC<SlideProps> = props => {
  const { image, projectName } = props.item;

  return (
    <div className={styles.slide}>
      <Image src={image} alt={projectName} width={201} height={240} />
      <p>{projectName}</p>
    </div>
  );
};
