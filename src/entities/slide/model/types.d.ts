import type { EntryType } from '@/entities/entry';

export interface SlideParamsType {
  pageSize?: number;
  page?: number;
  isDeleted?: boolean;
  include?: string;
  orderBy?: string;
}

export interface SlideType {
  id: string;
  oldId: number;
  title: string;
  desc: string;
  createdAt: string;
  isDeleted: boolean;
  entryId: string;
  fileId: string;
  url: string;
  position: number;
  entry: EntryType;
  image: {
    preview: {
      path: string;
    };
  };
}

export interface SlideResponseType {
  data: SlideType[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
  };
}
