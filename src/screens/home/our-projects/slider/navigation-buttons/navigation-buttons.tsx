import { FC } from 'react';

import styles from './navigation-buttons.module.scss';

interface NavigationButtonsProps {
  prevHandler: () => void;
  nextHandler: () => void;
}

export const NavigationButtons: FC<NavigationButtonsProps> = props => {
  const { prevHandler, nextHandler } = props;

  return (
    <>
      <button className={styles.prevButton} onClick={prevHandler}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='94'
          height='348'
          viewBox='0 0 94 348'
          fill='none'>
          <g filter='url(#filter0_d_311_1034)'>
            <path d='M89 1L5 167L89 339' stroke='#4B5354' />
          </g>
          <defs>
            <filter
              id='filter0_d_311_1034'
              x='0.44165'
              y='0.774292'
              width='93.0076'
              height='346.445'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'>
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_311_1034'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_311_1034'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </button>
      <button className={styles.nextButton} onClick={nextHandler}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='94'
          height='348'
          viewBox='0 0 94 348'
          fill='none'>
          <g filter='url(#filter0_d_311_1033)'>
            <path d='M5 1L89 167L5 339' stroke='#4B5354' />
          </g>
          <defs>
            <filter
              id='filter0_d_311_1033'
              x='0.550781'
              y='0.774292'
              width='93.0076'
              height='346.445'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'>
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_311_1033'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_311_1033'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </button>
    </>
  );
};
