import { TypeFilterParams } from '@/components/common/filter/types';

export const filterParams: TypeFilterParams[] = [
  {
    value: 'За датою',
    options: [
      {
        value: 'За зростанням',
        type: 'asc',
      },
      {
        value: 'За спаданням',
        type: 'desc',
      },
    ],
  },
  {
    value: 'За кількістю запитів',
    options: [
      {
        value: 'За зростанням',
        type: 'asc',
      },
      {
        value: 'За спаданням',
        type: 'desc',
      },
    ],
  },
  {
    value: 'В алфавітному порядку',
    options: [
      {
        value: 'А - Я',
        type: 'asc',
      },
      {
        value: 'Я - А',
        type: 'desc',
      },
    ],
  },
];
