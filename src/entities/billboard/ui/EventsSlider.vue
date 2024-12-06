<script setup lang="ts">
import { useBillboardStore } from '@/entities/billboard';
import { AffichePlaces } from '@/shared/constants/AffichePlaces';

const places = AffichePlaces;
const billboardStore = useBillboardStore();
const { billboard } = storeToRefs(billboardStore);
const test = ref();

//to-do 
</script>

<template>
  <div>
    <Swiper>
      <SwiperSlide v-for="item in billboard.data" :key="item">
        <div class="w-full">
          <UInput class="slider-item" v-model="item.title" />
          <UTextarea class="slider-item" v-model="item.desc" />
          <UInput class="slider-item" v-model="item.phone" />
          <USelect
            class="slider-item"
            v-model="test"
            :options="Object.values(places)"
            value-attribute="key"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <VueDatePicker class="z-50" />
  </div>
</template>

<style scoped lang="scss">
.slider-item {
  @apply my-2 px-2 w-full;
}
</style>
