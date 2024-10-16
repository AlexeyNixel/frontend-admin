<script setup lang="ts">
import { DocumentList } from '@/widgets/document-list';
import { ListHeader } from '@/entities/list-header';
import {
  useDocumentStore,
  type DocumentResponseType,
} from '@/entities/document';

const documentStore = useDocumentStore();
const documents = ref<DocumentResponseType>();
const page = ref(1);

useHead({
  title: 'Список документов',
});

onBeforeMount(() => {
  fetchDocuments();
});

const fetchDocuments = async () => {
  documents.value = await documentStore.getDocuments({
    pageSize: 30,
    page: page.value,
    isDeleted: true,
  });
  console.log(documents.value);
};

const handleNavigate = () => {
  navigateTo({ path: '/document', query: { page: page.value } });
  fetchDocuments();
};
</script>

<template>
  <div v-if="documents">
    <list-header title="Документы" create-link="/document/create" />
    <document-list :documents="documents.data" />
    <UPagination
      class="pagination"
      :page-count="+documents.meta.pageSize"
      :total="+documents.meta.total"
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
