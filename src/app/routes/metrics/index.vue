<script lang="ts" setup>
import { MetricCard, useMetricStore } from '@/entities/metric';

const metricStore = useMetricStore();

const pageViewers = ref();
const pageVisits = ref();

onMounted(() => {
  fetchMetrics();
});

const fetchMetrics = async () => {
  pageViewers.value = (
    await metricStore.getMetrics({
      ids: 85679319,
      metrics: 'ym:s:pageviews',
      date1_a: 'today',
      date1_b: 'yesterday',
      date2_b: 'yesterday',
    })
  ).data.totals;
  pageVisits.value = (
    await metricStore.getMetrics({
      ids: 85679319,
      metrics: 'ym:s:visits',
      date1_a: 'today',
      date1_b: 'yesterday',
      date2_b: 'yesterday',
    })
  ).data.totals;
};
</script>

<template>
  <div class="metrics">
    <metric-card v-if="pageVisits" title="Визиты" :value="pageVisits" />
    <metric-card v-if="pageViewers" title="Просмотры" :value="pageViewers" />
  </div>
</template>

<style lang="scss" scoped>
.metrics {
  @apply flex flex-col md:grid grid-cols-3 gap-4 p-4;
}
</style>
