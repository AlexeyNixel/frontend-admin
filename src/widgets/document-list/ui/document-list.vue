<script setup lang="ts">
import { useDocumentStore } from '@/entities/document';
import { ListItem } from '@/entities/list-item';
import type { DocumentResponseType } from '@/entities/document';

const documentStore = useDocumentStore();
const documents = ref<DocumentResponseType>();
onMounted(() => {
  fetchDocument();
});

const fetchDocument = async () => {
  documents.value = await documentStore.getDocuments({
    pageSize: 30,
    isDeleted: true,
  });
  console.log(documents.value?.data);
};
</script>

<template>
  <div class="wrapper" v-if="documents?.data">
    <list-item
      v-for="item in documents.data"
      :key="item.id"
      :title="item.title"
      model="document"
      v-model:is-deleted="item.isDeleted"
      :slug="item.id"
    />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply p-2;
}
</style>
