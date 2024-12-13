<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMenuStore } from '@/entities/menu';
import { useMenuItemStore } from '@/entities/menu-item';

const menuStore = useMenuStore();
const menuItemStore = useMenuItemStore();
const route = useRoute();
const router = useRouter();
const menuItems = ref<Array<any>>([]);

const menu = reactive<any>({
  title: '',
  isDeleted: '',
  menuType: '',
});

const handleUpdate = async () => {
  // await menuStore.updateMenu(route.params.slug as string, menu);
  //
  // for (let item of menuItems.value) {
  //   menuItemStore.updateMenuItem(item.id, {
  //     position: item.position,
  //     slug: item.slug,
  //   });
  // }
  // await router.push({ name: 'menu' });
};

const handleDragEnd = () => {
  for (let i = 0; i < menuItems.value.length; i++) {
    menuItems.value[i].position = i;
  }
};

onMounted(async () => {
  const { data } = await menuStore.getMenu(route.params.slug as string, {
    include: 'menuItems',
  });

  data.menuItems?.forEach((item: any) => {
    menuItems.value.push(item);
  });

  Object.keys(menu).forEach((key) => {
    menu[key] = data[key];
  });
});
</script>

<template>
  <div class="flex items-center justify-center h-screen text-2xl font-bold">
    Скоро будет!
  </div>
  <!--  <div class="container">-->
  <!--    <div class="menu-update">-->
  <!--      <div class="menu-update__text">-->
  <!--        <div class="menu-update__item">-->
  <!--          <UInput v-model="menu.title" />-->
  <!--        </div>-->
  <!--        <Draggable-->
  <!--          v-model="menuItems"-->
  <!--          group="people"-->
  <!--          @end="handleDragEnd()"-->
  <!--          item-key="id"-->
  <!--        >-->
  <!--          <template #item="{ element }">-->
  <!--            <div-->
  <!--              class="flex justify-between text-sm rounded-[10px] py-1 px-2 my-2 ring-1 ring-gray-200 dark:ring-neutral-700 bg-white dark:bg-transparent text-gray-500 dark:text-white cursor-pointer"-->
  <!--            >-->
  <!--              <div class="mr-2">{{ element.position }}</div>-->
  <!--              <div>{{ element.title }}</div>-->
  <!--              <router-link-->
  <!--                :to="{ name: 'menuItemUpdate', params: { id: element.id } }"-->
  <!--              >-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--          </template>-->
  <!--        </Draggable>-->
  <!--        <div>-->
  <!--          <UButton class="rounded-[10px]" @click="handleUpdate()">-->
  <!--            Обновить-->
  <!--          </UButton>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.drag {
  &__item {
    background: #1d1e1f;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0;
    cursor: pointer;
  }
}

.menu-update {
  display: flex;

  &__item {
    margin: 20px 0;
  }
}
</style>
