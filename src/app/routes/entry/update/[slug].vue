<script setup lang="ts">
import { useEntryStore } from '@/entities/entry';
import EntryAdmin from '@/widgets/entry-admin/ui/entry-admin.vue';

const route = useRoute();
const entryStore = useEntryStore();
const entry = ref();

const { slug } = route.params;

onMounted(async () => {
  await fetchEntry();
});

const fetchEntry = async () => {
  entry.value = await entryStore.getOneEntry(slug as string, {
    include: 'preview,rubrics',
  });
};
</script>

<template>
  <div v-if="entry">
    <entry-admin :entry="entry" />
  </div>
  <div v-else>Новость не найдена</div>
</template>

<style scoped lang="scss"></style>
