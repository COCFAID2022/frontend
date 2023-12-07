import { FC } from 'react';

// import style from './videoPlayer.module.scss';

interface VideoPlayerProps {
  videoUrl: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div>
      <video controls width={'100%'} height={'auto'}>
        <track
          kind={'captions'}
          label={'Українські субтитри'}
          src={'субтитри.vtt'}
          default
        />
        <source src={videoUrl} type={'video/mp4'} /> Your browser does not
        support the video tag.
      </video>
    </div>
  );
};
