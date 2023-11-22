import { StaticImageData } from 'next/image';

export type TypeCardData = {
  id: number;
  info: {
    image: StaticImageData;
    title: string;
    description: string;
  };
  links: {
    supportLink: string;
    moreLink: string;
  };
  collectingMoney?: {
    progressPercent: number;
    collected: number;
    needCollect: number;
  };
};
