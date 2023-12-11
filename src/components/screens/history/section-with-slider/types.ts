import { TypeCardData } from '@/components/common/card/types';

export type TypeCardWithActions = TypeCardData & {
  actions: TypeCardActions;
};

export type TypeCardActions = {
  likesCount: number;
  comments: {
    count: number;
    items: string[];
  };
};
