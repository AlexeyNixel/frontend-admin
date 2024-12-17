<script setup lang="ts">
import dayjs from 'dayjs';
import DateTimePicker from '@/entities/date-time-picker/ui/date-time-picker.vue';
import RichEditor from '@/widgets/rich-editor/ui/rich-editor.vue';
import { useBillboardStore } from '@/entities/billboard';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { AffichePlaces } from '@/shared/constants/AffichePlaces';

const route = useRoute();
const billboardStore = useBillboardStore();
const toast = useToast();

const { slug } = route.params;

const places = AffichePlaces;
const billboard = ref<any>();

const newBillboard = reactive<any>({
  title: '',
  phone: '',
  slug: ' ',
  desc: '',
  eventDate: new Date(),
  eventTime: '',
  eventPlace: '',
  isDeleted: false,
});

onBeforeMount(async () => {
  if (slug) {
    await fetchBillboard();
    await assignObject();
  }
});

const updateBillboard = async () => {
  await billboardStore.updateBillboard(slug as string, {
    ...newBillboard,
    eventTime: `1970-01-01T${newBillboard.eventTime}:00.000Z`,
  });
  toast.add({ title: 'Событие обновленно' });
  navigateTo({ path: '/billboard' });
};

const createBillboard = async () => {
  await billboardStore.createBillboard({
    ...newBillboard,
    eventTime: `1970-01-01T${newBillboard.eventTime}:00.000Z`,
    eventDate:
      dayjs(newBillboard.eventDate).format('YYYY-MM-DDTHH:mm:00.000') + 'Z',
  });
  toast.add({ title: 'Событие созданно' });
  navigateTo({ path: '/billboard' });
};

const fetchBillboard = async () => {
  billboard.value = await billboardStore.getBillboard(slug as string);
};

const assignObject = () => {
  Object.keys(newBillboard).forEach((key) => {
    if (key === 'eventTime') {
      newBillboard[key] = billboard.value[key].slice(11, 16);
    } else {
      newBillboard[key] = billboard.value[key];
    }
  });
};

useHead({
  title: 'Обновить событие',
});
</script>

<template>
  <div class="billboard-admin">
    <div class="aside">
      <UInput
        v-model="newBillboard.title"
        class="aside__item"
        color="red"
        placeholder="Название"
      />
      <UInput
        v-model="newBillboard.phone"
        class="aside__item"
        color="red"
        placeholder="Номер"
      />
      <UInput
        v-model="newBillboard.slug"
        class="aside__item"
        color="red"
        placeholder="Слаг"
      />
      <USelect
        v-model="newBillboard.eventPlace"
        class="aside__item"
        color="red"
        placeholder="Место проведения"
        :options="places"
        value-attribute="key"
        option-attribute="value"
      />
      <div class="flex my-2">
        <UPopover class="w-full mr-2" :popper="{ placement: 'bottom-start' }">
          <UButton
            class="w-full"
            icon="i-heroicons-calendar-days-20-solid"
            :label="dayjs(newBillboard.eventDate).format('D MMM, YYYY')"
          />

          <template #panel="{ close }">
            <date-time-picker
              v-model="newBillboard.eventDate"
              is-required
              @close="close"
            />
          </template>
        </UPopover>

        <VueDatePicker
          time-picker
          v-model="newBillboard.eventTime"
          model-type="HH:mm"
          placeholder="Время события"
          class="h-full"
        />
      </div>
      <UCheckbox
        class="aside__item aside__item_border"
        label="Скрыта"
        v-model="newBillboard.isDeleted"
      />
      <UButton
        class="aside__item"
        label="Обновить"
        v-if="slug"
        @click="updateBillboard"
      />
      <UButton
        class="aside__item"
        label="Создать"
        v-else
        @click="createBillboard"
      />
    </div>
    <div class="body">
      <rich-editor v-model="newBillboard.desc" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.billboard-admin {
  @apply p-2 w-full flex;
  .aside {
    @apply w-3/12;

    &__item {
      @apply mb-2 w-full;

      &_border {
        @apply border border-red-500 dark:border-red-400 p-1 rounded-md;
      }

      &_row {
        @apply w-1/2;
      }
    }
  }

  .body {
    @apply w-9/12 ml-2;
  }
}

:deep(.dp__pointer) {
  font-family: Montserrat;
  @apply bg-red-500 dark:bg-red-400 border-0 text-neutral-100 dark:text-neutral-900 text-[14px] py-1 rounded-md;
}

:deep(.dp__input_icon) {
  @apply text-neutral-100 dark:text-neutral-900;
}
:deep(.dp__input_icons) {
  @apply text-neutral-100 dark:text-neutral-900;
}
</style>
