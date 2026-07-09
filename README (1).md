# Resume GitHub Pages

Темная статическая страница резюме без сборки: только `index.html` и `styles.css`.

## Быстрый запуск локально

Откройте `index.html` в браузере или запустите локальный сервер:

```bash
python3 -m http.server 8080
```

После этого страница будет доступна по адресу:

```text
http://localhost:8080
```

## Публикация на GitHub Pages

### Вариант 1. User site

1. Создайте репозиторий с именем:

```text
<your-github-username>.github.io
```

2. Положите в корень репозитория файлы:

```text
index.html
styles.css
README.md
```

3. Сделайте push в `main`:

```bash
git init
git add .
git commit -m "Add resume page"
git branch -M main
git remote add origin git@github.com:<your-github-username>/<your-github-username>.github.io.git
git push -u origin main
```

4. Откройте:

```text
https://<your-github-username>.github.io
```

### Вариант 2. Project site

1. Создайте любой репозиторий, например `resume`.
2. Загрузите файлы в корень репозитория.
3. Перейдите в `Settings` → `Pages`.
4. В `Build and deployment` выберите `Deploy from a branch`.
5. В `Branch` выберите `main` и `/root`, затем нажмите `Save`.
6. Сайт будет доступен по адресу:

```text
https://<your-github-username>.github.io/resume/
```

## Важно перед публикацией

GitHub Pages — публичная страница. Если не хотите светить телефон, удалите строку с телефоном из блока `Контакты` в `index.html`.
