import { useEffect, useState } from 'react';

type MatchMediaValues = {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};

const queries = [
  '(max-width: 480px)',
  '(min-width: 481px) and (max-width: 768px)',
  '(min-width: 769px) and (max-width: 991px)',
  '(min-width: 992px)',
];

const getValues = (mediaQueryLists: MediaQueryList[]): MatchMediaValues => ({
  isMobile: mediaQueryLists[0].matches,
  isTablet: mediaQueryLists[1].matches,
  isLaptop: mediaQueryLists[2].matches,
  isDesktop: mediaQueryLists[3].matches,
});

export const useMatchMedia = (): MatchMediaValues => {
  const [values, setValues] = useState<MatchMediaValues>({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
  });

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (!isClient) return;

    const mediaQueryLists = queries.map(query => window.matchMedia(query));

    const handler = () => setValues(getValues(mediaQueryLists));

    mediaQueryLists.forEach(list => list.addEventListener('change', handler));

    // eslint-disable-next-line consistent-return
    return () =>
      mediaQueryLists.forEach(list =>
        list.removeEventListener('change', handler)
      );
  }, []);

  return values;
};
