import { mainApi } from '@/shared/api';
import type { EntryParams, EntryType } from '@/entities/entry';

export const findEntry = async (
  slug: string,
  params?: EntryParams
): Promise<EntryType> => {
  const { data } = await mainApi.get('/api/entry/' + slug, { params });
  return data;
};

export const findEntries = async (params?: EntryParams) => {
  const { data } = await mainApi.get('/api/entry', { params });
  return data;
};

export const patchEntry = async (slug: string, data: any): Promise<any> => {
  return await mainApi.patch('/api/entry/' + slug, data);
};

export const postEntry = async (data: any) => {
  return await mainApi.post('/api/entry/', data);
};
