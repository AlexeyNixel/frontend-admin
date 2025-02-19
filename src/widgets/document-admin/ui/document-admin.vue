<script setup lang="ts">
import RichEditor from '@/widgets/rich-editor/ui/rich-editor.vue';
import { type DocumentType, useDocumentStore } from '@/entities/document';
import { useMenuItemStore } from '@/entities/menu-item';

const props = defineProps<{
  document?: any;
}>();

const route = useRoute();
const toast = useToast();
const documentStore = useDocumentStore();
const menuItemStore = useMenuItemStore();

const document = ref<DocumentType>();
const menuItems = ref();

const { slug } = route.params;

const newDocument = reactive({
  title: '',
  content: '',
  isDeleted: false,
  menuItemId: '',
});

onBeforeMount(async () => {
  if (props.document) {
    assigmentObject();
  }
  await fetchMenuItems();
});

const fetchMenuItems = async () => {
  const { data } = await menuItemStore.getMenuItems({
    pageSize: 100,
  });
  menuItems.value = data;
};

const assigmentObject = () => {
  Object.keys(newDocument).forEach((key) => {
    newDocument[key] = props.document[key];
  });
};

const updateDocument = async () => {
  await documentStore.updateDocument(slug as string, newDocument);
  toast.add({
    title: 'Запись обновлена',
  });
};

const createDocument = async () => {
  await documentStore.createDocument(newDocument);
  toast.add({
    title: 'Запись создана',
  });
};
</script>

<template>
  <div class="document-admin">
    <div class="aside">
      <UInput
        class="aside__item"
        placeholder="Название"
        color="red"
        v-model="newDocument.title"
      />
      <USelect
        class="aside__item"
        v-model="newDocument.menuItemId"
        :options="menuItems"
        option-attribute="title"
        value-attribute="id"
        color="red"
        placeholder="Меню"
      />
      <UButton
        v-if="slug"
        @click="updateDocument"
        label="Обновить"
        class="aside__item"
      />
      <UButton
        v-else
        @click="createDocument"
        label="Создать"
        class="aside__item"
      />
    </div>
    <div class="body"><rich-editor v-model="newDocument.content" /></div>
  </div>
</template>

<style scoped lang="scss">
.document-admin {
  @apply p-2 flex;
  .aside {
    @apply w-3/12 mr-2;

    &__item {
      @apply w-full mb-2;
    }
  }

  .body {
    @apply w-9/12;
  }
}
</style>
