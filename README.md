# Богдан Топоров — GitHub Pages resume

Статический сайт-резюме для GitHub Pages. Без сборщика, npm и внешних CDN. Работает как обычный набор файлов в корне репозитория.

## Что внутри

```text
index.html                         # основной лендинг для HR / hiring manager / CTO
styles.css                         # темный стиль, responsive, print rules
scripts.js                         # reveal animations, counters, scroll progress, copy email, hover motion
resume.html                        # ATS-safe HTML-резюме без сложной сетки и анимаций
resume.txt                         # plain text версия для парсинга / быстрой отправки
assets/profile.webp                # оптимизированное фото
assets/profile-square.webp         # квадратная версия для превью
assets/profile.jpg                 # fallback-фото
assets/logos/*.svg                 # локальные SVG wordmarks компаний
assets/docs/toporov-bogdan-cv.pdf  # PDF-резюме для скачивания
```

## Локальный запуск

```bash
python3 -m http.server 8080
```

Открыть:

```text
http://localhost:8080
```

## Публикация на GitHub Pages

Для твоего GitHub username `obgov` репозиторий должен называться строго:

```text
obgov.github.io
```

Файлы должны лежать в корне репозитория:

```text
obgov.github.io/
  index.html
  styles.css
  scripts.js
  resume.html
  resume.txt
  assets/
  README.md
```

Не должно быть так:

```text
obgov.github.io/
  resume-github-pages/
    index.html
```

## Push

```bash
git init
git add .
git commit -m "Add personal resume website"
git branch -M main
git remote add origin git@github.com:obgov/obgov.github.io.git
git push -u origin main
```

## Настройка Pages

В репозитории:

```text
Settings → Pages → Build and deployment
Source: Deploy from a branch
Branch: main
Folder: /root
Save
```

Потом проверить:

```text
Actions → pages build and deployment
```

Нужен зеленый статус. После деплоя сайт будет доступен здесь:

```text
https://obgov.github.io
```

## Важные правки перед публикацией

1. Если не хочешь светить телефон публично, удали строку с `tel:+79215886202` из `index.html`, `resume.html` и `resume.txt`.
2. SVG-файлы в `assets/logos` — локальные текстовые wordmark-карточки, а не официальные бренд-ассеты. Если нужны официальные логотипы, замени SVG-файлы на настоящие изображения с теми же именами.
3. Для ATS лучше отправлять `resume.html`, `resume.txt` или PDF, а не ссылку на анимированный лендинг.

## Что уже добавлено

- Темный hero с фото.
- Scroll reveal анимации.
- Анимированные счетчики достижений.
- Hover motion для карточек.
- Scroll progress bar.
- Copy email button.
- Блоки компаний с SVG wordmarks.
- Отдельная ATS-safe версия.
- Print styles.
- JSON-LD Person schema.
- Responsive layout для мобильных.
