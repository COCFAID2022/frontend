'use client';
import { useLayoutEffect, useState } from 'react';

type MatchMediaValues = {
  isMobile: boolean;
  isTablet: boolean;
  // isLaptop: boolean;
  isDesktop: boolean;
};

const queries = [
  '(max-width: 768px)',
  // '(min-width: 376px) and (max-width: 768px)',
  '(min-width: 769px) and (max-width: 1439px)',
  '(min-width: 1440px)',
];

const getValues = (mediaQueryLists: MediaQueryList[]): MatchMediaValues => ({
  isMobile: mediaQueryLists[0].matches,
  isTablet: mediaQueryLists[1].matches,
  // isLaptop: mediaQueryLists[2].matches,
  isDesktop: mediaQueryLists[2].matches,
});

export const useMatchMedia = (): MatchMediaValues => {
  const [values, setValues] = useState<MatchMediaValues>(() => ({
    isMobile: false,
    isTablet: false,
    // isLaptop: false,
    isDesktop: false,
  }));

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryLists = queries.map(query => matchMedia(query));

      // Инициализируем состояние при первом рендеринге
      setValues(getValues(mediaQueryLists));

      const handler = () => setValues(getValues(mediaQueryLists));

      mediaQueryLists.forEach(list => list.addEventListener('change', handler));

      return () =>
        mediaQueryLists.forEach(list =>
          list.removeEventListener('change', handler)
        );
    }
  }, []);

  return values;
};
