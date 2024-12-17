import {
  type BillboardParams,
  BillboardApi,
  type BillboardType,
} from '@/entities/billboard';

export const useBillboardStore = defineStore('billboard', () => {
  const getBillboard = async (slug: string, params?: BillboardParams) => {
    const { data } = await BillboardApi.findBillboard(slug, params);
    return data;
  };

  const billboards = ref<BillboardType[]>();
  const billboard = ref<BillboardType[]>([]);
  const selectedEvents = ref<BillboardType[]>();
  const activeComp = ref<'event' | 'calendar'>('calendar');

  const getBillboards = async (params?: BillboardParams) => {
    return await BillboardApi.findBillboards(params);
  };

  const getBillboardByDay = async (day: string, params?: BillboardParams) => {
    billboard.value = await BillboardApi.findBillboards({
      fromDate: day + 'T00:00:00.000Z',
      toDate: day + 'T00:00:00.000Z',
      ...params,
    });
  };

  const updateBillboard = async (slug: string, data: any) => {
    return await BillboardApi.putBillboard(slug, data);
  };

  const createBillboard = async (data: any) => {
    return await BillboardApi.postBillboard(data);
  };

  return {
    billboards,
    billboard,
    selectedEvents,
    activeComp,
    getBillboardByDay,
    getBillboard,
    getBillboards,
    updateBillboard,
    createBillboard,
  };
});
