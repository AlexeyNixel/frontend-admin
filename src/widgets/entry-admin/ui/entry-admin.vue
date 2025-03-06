<script setup lang="ts">
import DateTimePicker from '@/entities/date-time-picker/ui/date-time-picker.vue';
import UploadDocument from '@/widgets/upload-document/ui/upload-document.vue';
import RichEditor from '@/widgets/rich-editor/ui/rich-editor.vue';
import dayjs from 'dayjs';
import type { DepartmentType } from '@/entities/department/model/types';
import { type RubricType, useRubricStore } from '@/entities/rubric';
import { useDepartmentStore } from '@/entities/department';
import { UploadImage } from '@/widgets/upload-image';
import { useEntryStore } from '@/entities/entry';

const props = defineProps<{
  entry?: any;
}>();

const route = useRoute();
const entryStore = useEntryStore();
const departmentStore = useDepartmentStore();
const rubricStore = useRubricStore();
const toast = useToast();

const rubrics = ref<RubricType[]>();
const departments = ref<DepartmentType[]>();
const { slug } = route.params;

const newEntry = reactive<any>({
  title: '',
  desc: '',
  slug: '',
  content: '',
  fileId: '',
  rubrics: [],
  departmentId: '',
  publishedAt: new Date(),
  isDeleted: false,
  pinned: false,
});

onMounted(() => {
  if (props.entry) {
    Object.keys(newEntry).forEach((key: any) => {
      if (key === 'rubrics') {
        props.entry[key].forEach((item) => {
          newEntry.rubrics.push(item.rubricId);
        });
      } else {
        newEntry[key] = props.entry[key];
      }
    });
  }
  fetchDepartment();
  fetchRubric();
});

const fetchDepartment = async () => {
  const { data } = await departmentStore.getDepartments({
    isDeleted: true,
    pageSize: 20,
  });
  departments.value = data;
};

const fetchRubric = async () => {
  const { data } = await rubricStore.getRubrics({
    pageSize: 50,
  });
  rubrics.value = data;
};

const updateEntry = async () => {
  await entryStore.updateEntry(slug as string, newEntry);
  toast.add({ title: 'Новость обновлена' });
  navigateTo({ path: '/entry' });
};

const createEntry = async () => {
  toast.add({ title: 'Новость создана' });
  // const creatingEntry = await entryStore.createEntry(newEntry);

  // navigateTo(`http://dev.infomania.ru/entry/${creatingEntry.data.slug}`, {
  //   external: true,
  // });
};
</script>

<template>
  <div class="entry-update">
    <div class="header">
      <div class="aside">
        <upload-image
          v-model="newEntry.fileId"
          :image="entry ? entry?.preview.path : ''"
        />
        <UPopover class="aside__item" :popper="{ placement: 'bottom-start' }">
          <UButton
            class="aside__item"
            icon="i-heroicons-calendar-days-20-solid"
            :label="dayjs(newEntry.publishedAt).format('D MMM, YYYY')"
          />

          <template #panel="{ close }">
            <date-time-picker
              v-model="newEntry.publishedAt"
              is-required
              @close="close"
            />
          </template>
        </UPopover>
        <USelect
          color="red"
          class="aside__item"
          v-model="newEntry.departmentId"
          :options="departments"
          option-attribute="title"
          value-attribute="id"
          placeholder="Выбрать отдел"
        />
        <USelectMenu
          color="red"
          multiple
          class="aside__item"
          v-model="newEntry.rubrics"
          :options="rubrics"
          option-attribute="title"
          value-attribute="id"
          placeholder="Выбрать рубрику"
        />
        <div class="aside__item_group">
          <UCheckbox
            v-model="newEntry.isDeleted"
            color="red"
            class="w-full"
            label="Скрыта"
            border
          />
          <UCheckbox
            v-model="newEntry.pinned"
            color="red"
            class="w-full"
            label="Закреплена"
            border
          />
        </div>
        <upload-document />
        <UButton
          v-if="slug"
          color="red"
          class="aside__item"
          type="warning"
          @click="updateEntry"
        >
          Обновить
        </UButton>
        <UButton
          v-else
          color="red"
          class="aside__item"
          type="warning"
          @click="createEntry"
        >
          Создать
        </UButton>
      </div>

      <div class="text-group">
        <UInput
          v-model="newEntry.title"
          color="red"
          class="text-group__item"
          placeholder="Название"
        />
        <UInput
          v-model="newEntry.desc"
          color="red"
          class="text-group__item"
          placeholder="Описание"
        />
        <UInput
          v-model="newEntry.slug"
          color="red"
          class="text-group__item"
          placeholder="Слаг"
        />
        <div class="editor">
          <rich-editor v-model="newEntry.content" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.entry-update {
  @apply dark:bg-neutral-900 p-2 rounded-xl h-full;
  .header {
    @apply flex;

    .aside {
      @apply w-3/12 mr-2;

      &__item {
        @apply w-full m-0 mb-2;

        &_group {
          @apply flex border border-red-500 dark:border-red-400 p-1 bg-red-500 dark:bg-red-400 my-2 rounded-md;
        }

        &_img {
          @apply h-[230px] mb-2;
        }
      }
    }

    .text-group {
      @apply w-full;

      &__item {
        @apply mb-2;
      }
      .editor-alt {
        @apply absolute right-6 mt-1 z-20;
        .editor {
          @apply relative;
        }
      }
    }
  }
}

:deep(.el-input__wrapper) {
  @apply rounded-xl w-full;
}

:deep(.el-select__wrapper) {
  @apply rounded-xl w-full;
}

:deep(.el-input) {
  @apply rounded-xl w-full mb-2;
}

:deep(.el-checkbox) {
  @apply rounded-xl;
}
</style>
