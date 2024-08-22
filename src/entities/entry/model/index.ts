import {
  type EntryParams,
  type EntryResponseType,
  EntryApi,
} from '@/entities/entry';

export const useEntryStore = defineStore('entry', () => {
  const entries = ref<EntryResponseType>();

  const getAllEntries = async (params: EntryParams) => {
    entries.value = await EntryApi.findEntries(params);
    return entries.value;
  };

  const deleteEntry = async (slugOrId: string, isDeleted: boolean) => {
    return await EntryApi.patchEntry(slugOrId, { isDeleted });
  };

  return {
    entries,
    getAllEntries,
    deleteEntry,
  };
});
