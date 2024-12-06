<script setup lang="ts">
import { type EntryResponseType } from '@/entities/entry';
import { ListItem } from '@/entities/list-item';

const page = ref(1);

const props = defineProps<{
  entries: EntryResponseType;
}>();
</script>

<template>
  <div class="entry-list" v-if="entries">
    <div class="entries">
      <list-item
        model="entry"
        v-for="item in entries.data"
        :key="item.id"
        :title="item.title"
        :slug="item.slug"
        :date="item.publishedAt"
        v-model:is-deleted="item.isDeleted"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.entry-list {
  &__pagination {
    @apply sticky bottom-0 z-50 flex items-center justify-center;
  }
}
.entries {
  @apply p-2;
}
</style>
