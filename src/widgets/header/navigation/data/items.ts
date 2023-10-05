export type TypeChildren = {
  value: string;
  href: string;
  children: TypeChildren;
}[];

export type TypeNavigationItems = {
  value: string;
  href: string;
  children: TypeChildren;
};
export const navigationItems: TypeNavigationItems[] = [
  {
    value: 'Головна',
    href: '/',
    children: [
      {
        value: 'Історія організації',
        href: '/history',
        children: [],
      },
      { value: 'Команда', href: '/team', children: [] },
      {
        value: 'Наші цілі та завдання',
        href: '/goals',
        children: [],
      },
      { value: 'Наші досягнення', href: '/achievements', children: [] },
    ],
  },
  {
    value: 'Наші проекти',
    href: '/projects',
    children: [
      {
        value: 'Опис поточних проектів',
        href: '/projects/current',
        children: [],
      },
      {
        value: 'Проекти, які вже були завершені',
        href: '/projects/completed',
        children: [],
      },
      { value: 'Результати проектів', href: '/projects/results', children: [] },
      { value: 'Звіти', href: '/projects/reports', children: [] },
    ],
  },
  {
    value: 'Як допомогти',
    href: '/help',
    children: [
      { value: 'Пожертвування онлайн', href: '/help/donate', children: [] },
      {
        value: 'Список необхідних матеріалів та спорядження',
        href: '/help/supplies',
        children: [],
      },
      { value: 'Співпраця', href: '/help/cooperation', children: [] },
      { value: 'Волонтерство', href: '/help/volunteering', children: [] },
    ],
  },
  {
    value: 'Новини',
    href: '/news-all',
    children: [
      { value: 'Новини про нас', href: '/news/about', children: [] },
      { value: 'Загальні новини', href: '/news/general', children: [] },
      { value: 'Історії людей', href: '/news/people', children: [] },
    ],
  },
  {
    value: 'UA',
    href: '/change',
    children: [{ value: 'EN', href: '/change/language', children: [] }],
  },
];
