import {
  EntryApi,
  type EntryParams,
  type EntryType,
  type EntryResponseType,
} from '@/entities/entry';

export const useEntryStore = defineStore('entry', () => {
  const entries = ref<EntryResponseType>();
  const entry = ref<EntryType>();

  const getAllEntries = async (params: EntryParams) => {
    entries.value = await EntryApi.findEntries(params);
    return entries.value;
  };

  const getOneEntry = async (slug: string, params: EntryParams) => {
    entry.value = await EntryApi.findEntry(slug, params);
    return entry.value;
  };

  const deleteEntry = async (slugOrId: string, isDeleted: boolean) => {
    return await EntryApi.patchEntry(slugOrId, { isDeleted });
  };

  const updateEntry = async (slug: string, data: any) => {
    return await EntryApi.patchEntry(slug, data);
  };

  const createEntry = async (data: any) => {
    return await EntryApi.postEntry(data);
  };

  return {
    entries,
    entry,
    getAllEntries,
    getOneEntry,
    deleteEntry,
    updateEntry,
    createEntry,
  };
});
