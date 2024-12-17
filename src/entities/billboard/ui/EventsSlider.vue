<script setup lang="ts">
import { useBillboardStore } from '@/entities/billboard';
import { AffichePlaces } from '@/shared/constants/AffichePlaces';

const places = AffichePlaces;
const billboardStore = useBillboardStore();
const { billboard } = storeToRefs(billboardStore);
const test = ref();
</script>

<template>
  <Swiper class="w-max h-full">
    <SwiperSlide v-for="item in 5" :key="item">
      <div class="slider-item">
        {{ item }}
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.slider-item {
  @apply my-2 px-2 w-full bg-neutral-900 h-full;
}
</style>
