// Единый источник данных о сайте СТК «Пилот».
// Меняйте значения здесь — они подхватятся на всех страницах.

const env = import.meta.env as Record<string, string | undefined>;
export const BASE: string = env.BASE_URL || '/';
export const ORIGIN: string = env.SITE || 'https://pixelpromo.github.io';
// Путь к файлу с учётом base (для src/href в HTML).
export const asset = (p: string): string => `${BASE}${p.replace(/^\//, '')}`;
// Абсолютный URL с учётом base (для canonical, og:image, JSON-LD).
export const absolute = (p = '/'): string => `${ORIGIN}${asset(p)}`;

export const site = {
  name: 'СТК «Пилот»',
  shortName: 'СТК Пилот',
  tagline: 'Картинг-центр, трасса, дрифт-соревнования и отдых в Усть-Лабинске',
  url: 'https://pixelpromo.github.io/stk-pilot.ru/',
  description:
    'СТК «Пилот» в Усть-Лабинске: прокатный картинг, трек-дни для авто и мото, дрифт-соревнования Drift Games Pro Am и Сочи Дрифт Челлендж, аренда трассы и боксов, гостиница, ресторан, бани, бассейн и беседки.',
  address: 'Краснодарский край, г. Усть-Лабинск, ул. Преподобного Сергия Радонежского, 1Г',
  addressShort: 'г. Усть-Лабинск, ул. С. Радонежского 1Г',
  email: 'stkpilot@yandex.ru',
  // Координаты картодрома (для карты и «как добраться»)
  geo: { lat: 45.219121, lon: 39.640739 },
  yandexMaps: 'https://yandex.ru/maps/-/CHXeRZ3w',
  hours: 'Ежедневно, 9:00–19:00',
};

// Телефоны по направлениям — главная точка связи «позвони и закажи».
export type Phone = { label: string; purpose: string; href: string; display: string };
export const phones: Phone[] = [
  { label: 'Прокат картов и гостиница', purpose: 'Прокат картов, бронирование номеров', href: 'tel:+79186390397', display: '+7 (918) 639-03-97' },
  { label: 'Трасса и соревнования', purpose: 'Аренда трассы, тест-драйв, соревнования', href: 'tel:+78613542003', display: '+7 (861) 354-20-03' },
  { label: 'Ресторан и беседки', purpose: 'Ресторан «Rosemary», беседки', href: 'tel:+79891293976', display: '+7 (989) 129-39-76' },
  { label: 'Бани', purpose: 'Бронирование бань', href: 'tel:+79288409121', display: '+7 (928) 840-91-21' },
];

// Единый телефон «на всё» для шапки (прокат картов / гостиница).
export const mainPhone = phones[0];

export type Social = { label: string; handle: string; href: string };
export const socials: Social[] = [
  { label: 'ВКонтакте', handle: 'vk.com/stkpilot', href: 'https://vk.com/stkpilot' },
  { label: 'Instagram', handle: '@stkpilot', href: 'https://www.instagram.com/stkpilot/' },
  { label: 'Facebook', handle: 'stkpilot23', href: 'https://www.facebook.com/stkpilot23/' },
];

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: 'Спортивные активности',
    children: [
      { label: 'Прокатный картинг', href: '/karting/' },
      { label: 'Трек-дни', href: '/trek-dni/' },
      { label: 'Аренда трассы', href: '/arenda-trassy/' },
      { label: 'Аренда боксов', href: '/boksy/' },
    ],
  },
  {
    label: 'Отдых и инфраструктура',
    children: [
      { label: 'Гостиница', href: '/gostinica/' },
      { label: 'Ресторан Rosemary', href: '/restoran/' },
      { label: 'Бани', href: '/bani/' },
      { label: 'Бассейн', href: '/basseyn/' },
      { label: 'Беседки', href: '/besedki/' },
    ],
  },
  { label: 'О комплексе', href: '/o-trasse/' },
  { label: 'Контакты', href: '/kontakty/' },
];
