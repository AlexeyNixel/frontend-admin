<script setup lang="ts">
import { ListHeader } from '@/entities/list-header';
import { type SlideResponseType, useSliderStore } from '@/entities/slide';
import { ListItem } from '@/entities/list-item';

useHead({
  title: 'Список слайдов',
});

const sliderStore = useSliderStore();
const slides = ref<SlideResponseType>();

const sortedSlides = computed(() => {
  if (slides.value?.data) {
    return slides.value?.data.sort((a, b) => {
      return a.isDeleted === b.isDeleted ? 1 : -1;
    });
  }
});

onBeforeMount(async () => {
  await fetchSlides();
});

const fetchSlides = async () => {
  slides.value = await sliderStore.getSlides({
    isDeleted: true,
    pageSize: 30,
    include: 'entry',
  });
  console.log(slides.value);
};
</script>

<template>
  <list-header title="Слайды" create-link="/slide/create" />

  <div class="wrapper" v-if="slides">
    <list-item
      v-for="item in sortedSlides"
      :key="item.id"
      :title="item.title"
      model="slide"
      :date="item.createdAt"
      v-model:is-deleted="item.isDeleted"
      :slug="item.id"
      :external-link="item.entry ? `entry/${item?.entry.id}` : ''"
    />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply p-2;
}
</style>
