export interface EntryParams {
  orderBy?: string;
  page?: number;
  pageSize?: number;
  search?: string;
}

export interface EntryType {
  id: string;
  oldId: number;
  fileId: string;
  createdAt: string;
  publishedAt: string;
  title: string;
  desc: string;
  content: string;
  slug: string;
  published: boolean;
  isDeleted: boolean;
  departmentId: string;
  pinned: boolean;
  department: DepartmentType;
  preview: PreviewType;
  rubrics: any;
}

export interface EntryResponseType {
  data: EntryType[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
  };
}
