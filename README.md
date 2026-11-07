# Портфолио Анастасии Дубининой

Сайт цифрового методолога на Vite, React и TypeScript.

Репозиторий: https://github.com/dubininaa/resume_methodology

## Локальный запуск

```bash
npm ci
npm run dev
```

Главная страница открывается по адресу локального сервера. Рабочие материалы находятся на отдельной странице `/work-samples.html`.

## Сборка

```bash
npm run build
```

Готовые страницы и ресурсы сохраняются в `dist/public`.

Для проверки сборки с путями GitHub Pages:

```bash
BASE_PATH=/resume_methodology/ npm run build
```

## Публикация

Workflow `.github/workflows/deploy.yml` собирает сайт и публикует его при отправке изменений в `main`. Для публикации выберите **GitHub Actions** в настройках репозитория **Settings → Pages → Source**.

Адрес сайта после успешной публикации: https://dubininaa.github.io/resume_methodology/

## Основные файлы

- `src/pages/Home.tsx` — главная страница.
- `src/pages/WorkSamplesPage.tsx` — страница рабочих материалов.
- `src/data/workSamples.json` — содержание примеров.
- `public/`, `portfolio-images/`, `Фотографии/` — изображения и интерактивные материалы.

Зависимости, локальные настройки и файлы окружения в репозиторий не входят.
