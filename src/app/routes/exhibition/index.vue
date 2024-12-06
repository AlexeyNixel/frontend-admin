<script setup lang="ts">
import { useExhibitionStore } from '@/entities/exhibition';
import { ListHeader } from '@/entities/list-header';

const exhibitionStore = useExhibitionStore();
const exhibitions = ref<any>();

onBeforeMount(async () => {
  exhibitions.value = await fetchExhibitions();
});

const fetchExhibitions = async () => {
  exhibitions.value = await exhibitionStore.getExhibitions();
};
</script>

<template>
  <div>
    <list-header title="Выставки" create-link="" />
  </div>
</template>

<style scoped lang="scss"></style>
