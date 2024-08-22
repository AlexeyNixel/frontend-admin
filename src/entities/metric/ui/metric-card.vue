<script setup lang="ts">
import { useTransition } from '@vueuse/core';

const props = defineProps<{
  title: string;
  value: object;
}>();

const isLessYesterday = ref(false);
const refValue = ref(0);
const outputValue = useTransition(refValue, { duration: 1500 });

onMounted(() => {
  refValue.value = props.value.a[0];
});

const differencePercent = computed(() => {
  if (props.value.b[0] > props.value.a[0]) {
    isLessYesterday.value = true;
  }
  let res = (100 - (props.value.a[0] * 100) / props.value.b[0]) * -1;
  return res.toFixed(2) + '%';
});
</script>

<template>
  <div class="metric-card">
    <div class="title">
      {{ title }}
      <icon
        class="title__icon"
        name="i-heroicons-information-circle-16-solid"
      ></icon>
    </div>
    <div class="statistic">{{ outputValue.toFixed(0) }}</div>
    <div class="footer">
      <span>чем вчера</span>
      <div class="percent" :class="{ percent_red: isLessYesterday }">
        {{ differencePercent }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.metric-card {
  @apply p-4 h-max rounded-md bg-white dark:bg-neutral-800;

  .title {
    @apply flex items-center;

    &__icon {
      @apply ml-4;
    }
  }

  .statistic {
    @apply text-3xl font-bold;
  }

  .footer {
    @apply flex text-sm items-center;

    .percent {
      @apply text-green-500 ml-4;

      &_red {
        @apply text-red-500;
      }
    }
  }
}
</style>
