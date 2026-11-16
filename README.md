# СТК «Пилот» — сайт спортивно-технического комплекса

Статический сайт на [Astro](https://astro.build). Новая версия сайта СТК «Пилот» (картинг-центр
и трасса в Усть-Лабинске). Тёмная гоночная тема (чёрный / красный / асфальтовый), финишные
клетки, мега-меню с фото.

## Страницы

- Главная — `/`
- О комплексе — `/o-trasse/` (характеристики, история, значимые события)
- Прокатный картинг — `/karting/`
- Трек-дни — `/trek-dni/`
- Аренда трассы — `/arenda-trassy/`
- Аренда боксов — `/boksy/`
- Гостиница — `/gostinica/`
- Ресторан Rosemary — `/restoran/`
- Бани — `/bani/`
- Бассейн — `/basseyn/`
- Беседки — `/besedki/`
- Контакты — `/kontakty/`

В шапке разделы сгруппированы в два мега-меню — «Спортивные активности» (картинг, трек-дни,
аренда трассы, боксы) и «Отдых и инфраструктура» (гостиница, ресторан, бани, бассейн, беседки).

## Запуск

```bash
npm install
npm run dev       # разработка (http://localhost:4321)
npm run build     # сборка в dist/
npm run preview   # предпросмотр собранной версии
```

## Публикация на GitHub Pages

Сайт публикуется по адресу **https://pixelpromo.github.io/stk-pilot.ru/** — через ветку `gh-pages`.

### Первичная настройка (один раз)

1. Создайте репозиторий `https://github.com/pixelpromo/stk-pilot.ru`.
2. В папке проекта инициализируйте git, привяжите удалённый репозиторий и запушьте код:
   ```bash
   git init
   git remote add origin https://github.com/pixelpromo/stk-pilot.ru.git
   git add -A
   git commit -m "init"
   git push -u origin main
   ```
3. Установите зависимости и задеплойте:
   ```bash
   npm install
   npm run deploy
   ```
   Скрипт `deploy` собирает сайт (`dist/`) и пушит его в ветку `gh-pages`.
4. В репозитории откройте **Settings → Pages → Build and deployment → Source** и выберите
   **Deploy from a branch** → ветка **`gh-pages`** → папка **`/ (root)`** → Save.

### Обновление сайта

После изменений:
```bash
git add -A
git commit -m "update"
git push
npm run deploy
```

После публикации сайт доступен по адресу:
`https://pixelpromo.github.io/stk-pilot.ru/`.

### Собственный домен (stk-pilot.ru)

Чтобы сайт открывался по адресу `https://stk-pilot.ru/`:

1. В `astro.config.mjs` поменяйте `site` на `'https://stk-pilot.ru'`, а `base` на `'/'`.
2. В `public/` добавьте файл `CNAME` с содержимым `stk-pilot.ru`.
3. У DNS-провайдера пропишите для домена `stk-pilot.ru`:
   - `CNAME` `www` → `pixelpromo.github.io`
   - `A`-записи `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. В **Settings → Pages → Custom domain** укажите `stk-pilot.ru` и включите HTTPS.

## Структура

- `astro.config.mjs` — `site` и `base` для GitHub Pages
- `package.json` — скрипт `deploy` (сборка + публикация в ветку `gh-pages`)
- `src/config.ts` — контакты, телефоны по направлениям, навигация (меняется в одном месте)
- `src/data/content.ts` — трасса (характеристики, таймлайн), услуги, цены, номера
- `src/styles/global.css` — гоночная тёмная дизайн-система (палитра, шрифты, компоненты)
- `src/layouts/`, `src/components/`, `src/pages/` — макет, компоненты, страницы
- `public/images/` — изображения, favicon, robots.txt

## Прочее

- Форма заявки формирует письмо на `stkpilot@yandex.ru` (без бэкенда, через `mailto:`)
