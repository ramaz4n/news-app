export type CategoryFilterType = {
  name: string;
  queryType: string;
};

export const FILTERS: CategoryFilterType[] = [
  {
    name: 'Технологии',
    queryType: 'top-headlines',
  },
  {
    name: 'Спорт',
    queryType: 'top-headlines',
  },
  {
    name: 'Политика',
    queryType: 'top-headlines',
  },
];
