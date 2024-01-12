import { StaticImageData } from 'next/image';

// import imgTest from '@/images/cart-image.png';
import sponsor1 from '@/images/sponsor1.png';
import sponsor2 from '@/images/sponsor2.png';
import sponsor3 from '@/images/sponsor3.png';

export type TypeCardData = {
  id: number;
  info: {
    image: StaticImageData;
    title: string;
    description: string;
  };
  links?: {
    moreLink: string;
  };
};

export const sponsorsData: TypeCardData[] = [
  {
    id: 1,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor1,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 2,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor2,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 3,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor3,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 4,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor2,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 5,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor3,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 6,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor1,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 11,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor2,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 12,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor1,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 13,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor3,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 14,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor1,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 15,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor2,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
  {
    id: 16,
    info: {
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam quam neque bibendum aliquam aliquet amet mattis in. Adipiscing nisl ut dolor est. Commodo pharetra odio neque ut pharetra in lacus. Aliquam nibh sed velit lectus id commodo in sed porttitor. Proin dignissim eu etiam mi dictum felis consectetur. Sagittis arcu a ac elementum quam lobortis eu tellus non.',
      image: sponsor3,
      title: 'Найменування юридичної особи (компанії)',
    },
  },
];
