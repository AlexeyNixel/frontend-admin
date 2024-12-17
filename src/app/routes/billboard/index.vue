<script setup lang="ts">
import { ListHeader } from '@/entities/list-header';
import {
  type BillboardResponseType,
  useBillboardStore,
} from '@/entities/billboard';
import { BillboardList } from '@/widgets/billboard-list';

const billboardStore = useBillboardStore();
const route = useRoute();
const billboards = ref<BillboardResponseType>();
const page = ref(Number(route.query.page) || 1);

onBeforeMount(async () => {
  await fetchBillboard();
});

const fetchBillboard = async () => {
  billboards.value = await billboardStore.getBillboards({
    pageSize: 30,
    page: page.value,
    orderBy: '-eventDate',
    isDeleted: true,
  });
};

const handleNavigate = async () => {
  navigateTo({ path: '/billboard', query: { page: page.value } });
  await fetchBillboard();
};
</script>

<template>
  <div class="wrapper" v-if="billboards">
    <list-header title="Афиша" create-link="/billboard/create" />
    <billboard-list :events="billboards.data" />
    <UPagination
      class="pagination"
      :page-count="+billboards.meta.pageSize"
      :total="+billboards.meta.total"
      v-model="page"
      @update:model-value="handleNavigate"
    />
  </div>
</template>

<style scoped lang="scss">
.pagination {
  @apply sticky bottom-2 flex justify-center z-20;
}
</style>
