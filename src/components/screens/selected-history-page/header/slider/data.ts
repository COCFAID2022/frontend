import { StaticImageData } from 'next/image';

import DefaultPhoto from '../../../../../public/static/images/stub_photo.png';

type TypeSliderItems = {
  image: StaticImageData;
  href: string;
};

export const sliderItems: TypeSliderItems[] = [
  {
    href: '/def1',
    image: DefaultPhoto,
  },
  {
    href: '/def2',
    image: DefaultPhoto,
  },
  {
    href: '/def3',
    image: DefaultPhoto,
  },
  {
    href: '/def4',
    image: DefaultPhoto,
  },
  {
    href: '/def5',
    image: DefaultPhoto,
  },
  {
    href: '/def6',
    image: DefaultPhoto,
  },
  {
    href: '/def12',
    image: DefaultPhoto,
  },
  {
    href: '/def23',
    image: DefaultPhoto,
  },
  {
    href: '/def111',
    image: DefaultPhoto,
  },
];
