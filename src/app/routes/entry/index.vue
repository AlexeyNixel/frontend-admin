<script setup lang="ts">
import { useEntryStore } from '@/entities/entry';
import { EntryList } from '@/widgets/entry-list';
import { ListHeader } from '@/entities/list-header';

const entryStore = useEntryStore();
const searchText = ref('');
onMounted(() => {
  fetchEntry();
});

const fetchEntry = async () => {
  await entryStore.getAllEntries({
    orderBy: '-createdAt',
    pageSize: 20,
    search: searchText.value || undefined,
    isDeleted: true,
  });
  console.log(entryStore.entries);
};
</script>

<template>
  <div class="entry-list">
    <list-header
      class="entry-list__header"
      title="Новости"
      create-link="/entry/create"
      v-model="searchText"
      @keydown.enter="fetchEntry"
    />
    <entry-list
      v-if="entryStore.entries?.data.length > 0"
      :entries="entryStore.entries"
    />
    <div v-else class="not-found">Новости не найдены</div>
  </div>
</template>

<style scoped lang="scss">
.entry-list {
  &__header {
    @apply sticky top-0 z-10;
  }
}
.not-found {
  @apply flex items-center justify-center font-bold mt-12;
}
</style>
