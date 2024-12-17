<script setup lang="ts">
import { ListItem } from '@/entities/list-item';
import type { BillboardType } from '@/entities/billboard';

const props = defineProps<{
  events: BillboardType[];
}>();
</script>

<template>
  <div class="p-2">
    <list-item
      v-for="item in events"
      :title="item.title"
      model="billboard"
      :slug="item.slug"
      :date="item.eventDate"
      v-model:is-deleted="item.isDeleted"
    />
  </div>
</template>

<style scoped lang="scss"></style>
