import type { EntryType } from '@/entities/entry';

export interface RubricParamsType {
  pageSize?: number;
}

export interface RubricType {
  id: string;
  oldId: string;
  title: string;
  desc: string;
  slug: string;
  isDeleted: boolean;
  entries?: EntryType[];
}
