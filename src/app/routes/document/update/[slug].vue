<script setup lang="ts">
import { DocumentAdmin } from '@/widgets/document-admin';
import { useDocumentStore } from '@/entities/document';

const documentStore = useDocumentStore();
const route = useRoute();
const { slug } = route.params;

onBeforeMount(async () => {
  await fetchDocument();
});

const fetchDocument = async () => {
  await documentStore.getDocumentById(slug as string);

  useHead({
    title: documentStore.document?.title,
  });
};
</script>

<template>
  <div v-if="documentStore.document">
    <document-admin :document="documentStore.document" />
  </div>
</template>

<style scoped lang="scss"></style>
