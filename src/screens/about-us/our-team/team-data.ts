import { StaticImageData } from 'next/image';

import photo from '@/shared/assets/img/stub_photo.png';

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

export const teamData: TypeTeamData[] = [
  {
    department: 'Бухгалтерія',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ornare diam bibendum purus non ut facilisis. Hendrerit orci mattis platea porttitor. ',
    workers: [
      {
        id: 1,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Старший бухгалтер',
      },
      {
        id: 2,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Молодший бухгалтер',
      },
      {
        id: 3,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Бухгалтер',
      },
    ],
  },
  {
    department: 'Дизайнери',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ornare diam bibendum purus non ut facilisis. Hendrerit orci mattis platea porttitor. ',
    workers: [
      { id: 4, img: photo, fullName: "Ім'я та прізвище", position: 'Дизайнер' },
      {
        id: 5,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Веб-дизайнер',
      },
      {
        id: 6,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Помічник дизайнера',
      },
    ],
  },
  {
    department: 'Розробники',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ornare diam bibendum purus non ut facilisis. Hendrerit orci mattis platea porttitor. ',
    workers: [
      {
        id: 7,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Frontend 1',
      },
      {
        id: 8,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Frontend 2',
      },
      {
        id: 9,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Frontend 3',
      },
    ],
  },
  {
    department: 'QA-фахівці',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ornare diam bibendum purus non ut facilisis. Hendrerit orci mattis platea porttitor. ',
    workers: [
      {
        id: 10,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Тестувальник 1',
      },
      {
        id: 11,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Тестувальник 2',
      },
      {
        id: 12,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Тестувальник 3',
      },
    ],
  },
  {
    department: 'Product-менеджер',
    description:
      'Lorem ipsum dolor sit amet consectetur. Ornare diam bibendum purus non ut facilisis. Hendrerit orci mattis platea porttitor. ',
    workers: [
      {
        id: 13,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Product-менеджер 1',
      },
      {
        id: 14,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Product-менеджер 2',
      },
      {
        id: 15,
        img: photo,
        fullName: "Ім'я та прізвище",
        position: 'Product-менеджер 3',
      },
    ],
  },
];
