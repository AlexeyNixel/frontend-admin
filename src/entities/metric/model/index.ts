import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchMetric, type MetricParams } from '@/entities/metric'

export const useMetricStore = defineStore('metric', () => {
  const metrics = ref<object>()

  const getMetrics = async (params: MetricParams): Promise<any> => {
    metrics.value = await fetchMetric(params)
    return metrics.value
  }

  return {
    metrics,
    getMetrics
  }
})
