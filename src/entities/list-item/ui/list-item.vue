<script setup lang="ts">
import dayjs from 'dayjs';
import { deleteModel } from '@/shared/api/delete-model';
import { mainApi } from '@/shared/api';

const props = defineProps<{
  model: string;
  title: string;
  slug: string;
  date?: string;
  menuItemType?: string;
  storagePlace?: string;
  isCollection?: boolean;
  menu?: string;
  deleteEvent?: Function;
  noShowLinkToContent?: boolean;
  altLink?: string;
  externalLink?: string;
}>();

const isDeleted = defineModel<boolean>('isDeleted');
const hideElement = async () => {
  if (isDeleted.value !== undefined) {
    if (props.model === 'slide') {
      return await mainApi.put(`/api/main-slider/${props.slug}`, {
        isDeleted: isDeleted.value,
      });
    } else {
      return deleteModel(`/api/${props.model}/${props.slug}`, isDeleted.value);
    }
  }
};

const translateMenuName = {
  COLLEAGUES: 'Коллегам',
  ABOUT: 'О библиотеке',
  DOCUMENTS: 'Документы',
  COMMON: 'Читателям',
};
</script>

<template>
  <div class="list-item">
    <nuxt-link
      :to="`/${model}/update/${altLink || slug}`"
      class="list-item__field list-item__field--long"
      >{{ title }}</nuxt-link
    >
    <div class="list-item__field list-item__field--font" v-if="date">
      {{ dayjs(date).format('DD.MM.YYYY') }}
    </div>
    <div class="list-item__field" v-if="menuItemType">
      {{ menuItemType }}
    </div>
    <div class="list-item__field" v-if="menu">
      {{ translateMenuName[menu].toUpperCase() }}
    </div>
    <div class="list-item__field" v-if="storagePlace">
      {{ storagePlace }}
    </div>
    <div
      class="list-item__field"
      v-else-if="storagePlace === '' || storagePlace === null"
    >
      Место хранения не указано
    </div>
    <div class="list-item__field" v-if="isCollection">
      {{ isCollection }}
    </div>
    <div class="list-item__field" v-if="isDeleted !== null">
      <UCheckbox
        @change="hideElement"
        color="red"
        label="скрыт"
        v-model="isDeleted"
      />
    </div>
    <div class="list-item__field" v-if="!noShowLinkToContent">
      <nuxt-link
        v-if="!externalLink"
        :to="`http://dev.infomania.ru/${model}/${slug}`"
        external
        target="_blank"
      >
        <icon class="icon" name="i-heroicons-link" />
      </nuxt-link>
      <nuxt-link
        v-else
        :to="`http://dev.infomania.ru/${externalLink}`"
        external
        target="_blank"
      >
        <icon class="icon" name="i-heroicons-link" />
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-item {
  @apply flex bg-white dark:bg-slate-800 p-2 mb-2 rounded-md;
  @apply hover:bg-neutral-300 hover:dark:bg-slate-900 transition;

  &__field {
    @apply w-1/6 z-10 flex items-center justify-center font-normal text-black dark:text-white;

    &--long {
      @apply w-full text-left justify-start;
    }

    .icon {
      @apply text-xl;
    }
  }
}
</style>
