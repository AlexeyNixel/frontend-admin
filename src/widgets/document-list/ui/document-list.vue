<script setup lang="ts">
import { type DocumentType, useDocumentStore } from '@/entities/document';
import { ListItem } from '@/entities/list-item';

const props = defineProps<{
  documents: DocumentType[];
}>();
</script>

<template>
  <div class="wrapper" v-if="documents">
    <list-item
      v-for="item in documents"
      :key="item.id"
      :title="item.title"
      model="document"
      v-model:is-deleted="item.isDeleted"
      :slug="item.menuItemId || '/'"
      :alt-link="item.id"
    />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply p-2;
}
</style>
