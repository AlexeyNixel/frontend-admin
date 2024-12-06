<script setup lang="ts">
import { ListHeader } from '@/entities/list-header';
import { ListItem } from '@/entities/list-item';
import { type MenuResponseType, useMenuStore } from '@/entities/menu';

const menuStore = useMenuStore();
const menus = ref<MenuResponseType>();

useHead({
  title: 'Список меню',
});

onMounted(() => {
  fetchMenus();
});

const fetchMenus = async () => {
  menus.value = await menuStore.getMenus({
    isDeleted: true,
    pageSize: 30,
  });
};
</script>

<template>
  <div>
    <list-header title="Меню" create-link="/menu/create" />
    <div class="wrapper" v-if="menus">
      <list-item
        v-for="item in menus.data"
        :key="item.id"
        :title="item.title"
        v-model:is-deleted="item.isDeleted"
        :menu="item.menuType"
        model="menu"
        :slug="item.id"
        no-show-link-to-content
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply p-2;
}
</style>
