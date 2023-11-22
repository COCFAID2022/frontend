export type TypeFilterParams = {
  value: string;
  options: TypeOption[];
};

export type TypeOption = {
  value: string;
  type: 'asc' | 'desc';
};

export type TypeSelectedOption = TypeOption['type'];
