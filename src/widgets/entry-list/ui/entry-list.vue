<script setup lang="ts">
import { type EntryResponseType, useEntryStore } from '@/entities/entry';
import { ListItem } from '@/entities/list-item';

const entryStore = useEntryStore();

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
        :slug="'/entry/' + item.slug"
        :date="item.publishedAt"
        v-model:is-deleted="item.isDeleted"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.entries {
  @apply p-2;
}
</style>
