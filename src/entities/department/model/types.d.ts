export interface DepartmentParams {
  include?: string;
  isDeleted?: boolean;
  pageSize?: number;
}

export type DepartmentType = {
  id: string;
  oldId: number;
  fileId: string;
  title: string;
  slug: string;
  isDeleted: boolean;
  entries: string;
  preview: PreviewType;
};

export type DepartmentResponseType = {
  data: DepartmentType[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
  };
};
