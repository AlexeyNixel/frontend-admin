import axios from 'axios'
import type { MetricParams } from '@/entities/metric'
import * as process from 'process'

export const fetchMetric = async (params: MetricParams) => {
  return await axios.get('https://api-metrika.yandex.net/stat/v1/data/comparison/drilldown', {
    params,
    headers: {
      Authorization: 'OAuth ' + import.meta.env['VITE_METRIC_TOKEN']
    }
  })
}
