enum AffichePlacesEnum {
  SPACE_TYPE_ALL = 'all',
  SPACE_TYPE_OUT = 'out',
  SPACE_TYPE_GUEST = 'guest',
  SPACE_TYPE_GUEST_2 = 'guest_2',
  SPACE_TYPE_ITCLASS = 'itclass',
  SPACE_TYPE_ITCLASS_1 = 'itclass_1',
  SPACE_TYPE_ITCLASS_2 = 'itclass_2',
  SPACE_TYPE_CONF = 'conf',
  SPACE_TYPE_MEDIA = 'media',
  SPACE_TYPE_MAB = 'mab',
  SPACE_TYPE_OKIR = 'okir',
  SPACE_TYPE_OMP = 'omp',
  SPACE_TYPE_OOL = 'ool',
  SPACE_TYPE_KOHL_DS = 'kohl_ds',
  SPACE_TYPE_KOHL_C = 'kohl_c',
  SPACE_TYPE_CROSS = 'cross',
  SPACE_TYPE_OOL_COM = 'ool_com',
  SPACE_TYPE_CPKIM = 'cpkim',
  SPACE_TYPE_VIRT = 'virt',
}

export const AffichePlaces: { [key in AffichePlacesEnum]: string } = {
  [AffichePlacesEnum.SPACE_TYPE_ALL]: 'Все помещения библиотеки',
  [AffichePlacesEnum.SPACE_TYPE_OUT]: 'Выездное',
  [AffichePlacesEnum.SPACE_TYPE_GUEST]: 'Гостиная',
  [AffichePlacesEnum.SPACE_TYPE_GUEST_2]: 'Гостиная (Цоколь)',
  [AffichePlacesEnum.SPACE_TYPE_ITCLASS]: 'IT-класс (весь)',
  [AffichePlacesEnum.SPACE_TYPE_ITCLASS_1]:
    'Компьютерный класс (секция с компьютерами)',
  [AffichePlacesEnum.SPACE_TYPE_ITCLASS_2]: 'Компьютерный класс (студия)',
  [AffichePlacesEnum.SPACE_TYPE_CONF]: 'Конференц-зал',
  [AffichePlacesEnum.SPACE_TYPE_MEDIA]: 'Медиатека',
  [AffichePlacesEnum.SPACE_TYPE_MAB]: 'Молодёжно-аналитическое бюро',
  [AffichePlacesEnum.SPACE_TYPE_OKIR]: 'Отдел координации и развития',
  [AffichePlacesEnum.SPACE_TYPE_OMP]: 'Отдел литературных программ',
  [AffichePlacesEnum.SPACE_TYPE_OOL]: 'Отдел отраслевой литературы (зал)',
  [AffichePlacesEnum.SPACE_TYPE_KOHL_DS]:
    'Отдел художественной литературы (детский сектор)',
  [AffichePlacesEnum.SPACE_TYPE_KOHL_C]:
    'Отдел художественной литературы (цокольный этаж)',
  [AffichePlacesEnum.SPACE_TYPE_CROSS]:
    'Пересечение Красного проспекта и Октябрьской',
  [AffichePlacesEnum.SPACE_TYPE_OOL_COM]: 'Центр графической культуры',
  [AffichePlacesEnum.SPACE_TYPE_CPKIM]:
    'Центр поддержки культурных инициатив молодёжи',
  [AffichePlacesEnum.SPACE_TYPE_VIRT]: 'Электронные ресурсы библиотеки',
};

export interface BillboardType {
  id: string;
  oldId: number;
  eventDate: string;
  eventTime: string;
  title: string;
  desc: string;
  eventPlace: AffichePlacesEnum;
  phone: string;
  slug: string;
  entryId: string;
  isDeleted: boolean;
}

export interface BillboardResponseType {
  data: BillboardType[];
  meta: { page: number; pageSize: number; total: number };
}

export interface BillboardParams {
  page?: number;
  orderBy?: string;
  fromDate?: string;
  toDate?: string;
  pageSize?: number;
}
