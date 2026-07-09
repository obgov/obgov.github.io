# Богдан Топоров — GitHub Pages resume

Статический сайт-резюме для GitHub Pages. Без сборщика, npm и внешних CDN. Работает как обычный набор файлов в корне репозитория `obgov.github.io`.

## Что внутри

```text
index.html                         # основной лендинг для HR / hiring manager / CTO
styles.css                         # новый дизайн, mobile-first адаптив, анимации, print rules
scripts.js                         # reveal, counters, scroll progress, cursor glow, magnetic cards, copy email
resume.html                        # ATS-safe HTML-резюме без сложной сетки и анимаций
resume.txt                         # plain text версия для парсинга / быстрой отправки
assets/profile.webp                # оптимизированное фото
assets/profile-square.webp         # square preview / Open Graph
assets/profile.jpg                 # fallback-фото
assets/logos/*.svg                 # локальные SVG-логотипы/wordmark компаний
assets/docs/toporov-bogdan-cv.pdf  # актуальное PDF-резюме
```

## Что изменено

- Пересобран `styles.css` под фактическую структуру текущего `index.html`. В старом комплекте HTML и CSS были рассинхронизированы.
- Добавлена полноценная мобильная версия: sticky topbar, горизонтальное меню, адаптив hero, experience, cards, ATS/contact блоки.
- Достижения привязаны к конкретному месту работы, а не вынесены отдельным оторванным блоком.
- Добавлены локальные логотипы компаний в `assets/logos`.
- Добавлены/сохранены анимации: reveal on scroll, animated counters, scroll progress, cursor glow, magnetic cards, marquee logo strip.
- Добавлена поддержка `prefers-reduced-motion`.
- Обновлены ATS HTML и TXT версии на основе актуального резюме.
- PDF положен в `assets/docs/toporov-bogdan-cv.pdf`.

## Локальный запуск

```bash
python3 -m http.server 8080
```

Открыть:

```text
http://localhost:8080
```

## Публикация на GitHub Pages

В репозитории `obgov.github.io` файлы должны лежать в корне:

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

Дальше:

```bash
git add .
git commit -m "Improve resume website design and mobile layout"
git push
```

Проверить деплой:

```text
Settings → Pages
Actions → pages build and deployment
https://obgov.github.io
```

## Важно

1. Сайт публичный. Если телефон не должен быть публичным, удали `tel:+79215886202` из `index.html`, `resume.html` и `resume.txt`.
2. Для ATS лучше отправлять `resume.html`, `resume.txt` или PDF, а не ссылку на анимированный лендинг.
3. Логотипы лежат локально, поэтому сайт не зависит от внешних CDN.
