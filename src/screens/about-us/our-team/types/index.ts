import { StaticImageData } from 'next/image';

export type TypeWorker = {
  id: number;
  img: StaticImageData;
  fullName: string;
  position: string;
};
export type TypeTeamData = {
  department: string;
  description: string;
  workers: TypeWorker[];
};
