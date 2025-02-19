<script setup lang="ts">
import { DocumentList } from '@/widgets/document-list';
import { ListHeader } from '@/entities/list-header';
import { useDocumentStore } from '@/entities/document';

useHead({
  title: 'Список документов',
});

const page = ref(1);
const documentStore = useDocumentStore();

onBeforeMount(async () => {
  await fetchDocuments();
});

const fetchDocuments = async () => {
  await documentStore.getDocuments({
    pageSize: 30,
    page: page.value,
    isDeleted: true,
  });
};

const handleNavigate = () => {
  navigateTo({ path: '/document', query: { page: page.value } });
  fetchDocuments();
};
</script>

<template>
  <div v-if="documentStore.documents">
    <list-header title="Документы" create-link="/document/create" />
    <document-list :documents="documentStore.documents.data" />
    <UPagination
      class="pagination"
      :page-count="+documentStore.documents.meta.pageSize"
      :total="+documentStore.documents.meta.total"
      v-model="page"
      @update:model-value="handleNavigate"
    />
  </div>
</template>

<style scoped lang="scss">
.pagination {
  @apply sticky bottom-2 flex justify-center z-20;
}
</style>
