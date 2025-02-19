<script setup lang="ts">
import { useEntryStore } from '@/entities/entry';
import { EntryList } from '@/widgets/entry-list';
import { ListHeader } from '@/entities/list-header';

const route = useRoute();
const entryStore = useEntryStore();
const { entries } = storeToRefs(entryStore);
const page = ref(Number(route.query.page) || 1);

const searchText = ref('');
onMounted(async () => {
  await fetchEntry();
});

const fetchEntry = async () => {
  await entryStore.getAllEntries({
    orderBy: '-publishedAt',
    pageSize: 30,
    page: page.value,
    search: searchText.value || undefined,
    isDeleted: true,
  });
};

const handleNavigate = () => {
  navigateTo({ path: '/entry', query: { page: page.value } });
  fetchEntry();
};

useHead({ title: 'Список новостей' });
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
    <template v-if="entryStore.entries?.data.length > 0">
      <entry-list :entries="entryStore.entries" />
      <UPagination
        class="entry-list__pagination"
        :page-count="+entries.meta.pageSize"
        :total="+entries.meta.total"
        v-model="page"
        @update:model-value="handleNavigate"
      />
    </template>
    <div v-else class="not-found">Новости не найдены</div>
  </div>
</template>

<style scoped lang="scss">
.entry-list {
  &__header {
    @apply sticky top-0;
  }

  &__pagination {
    @apply sticky bottom-2 flex justify-center z-20;
  }
}
.not-found {
  @apply flex items-center justify-center font-bold mt-12;
}
</style>
