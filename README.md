# Форматирование даты публикации

===

Есть страница, содержащая список видеозаписей.
У каждого блока есть дата публикации.

![Relative Time](./assets/time.png)

В данный момент выводится просто текущее значение. Пример: `2017-09-01 14:15:10`.
Решено изменять представление даты следующим образом в зависимости от его значения:
`12 минут назад`, если прошло меньше часа, `5 часов назад`, если прошло больше часа, `X дней назад`, если больше суток.

## Реализация

Используя HOC, обернуть `DateTime` в компонент `DateTimePretty` так, чтобы он преобразовывал дату в нужный вид.

Воспользуйтесь готовым файлом `App.js` и стилями `css/index.css` из каталога в качестве отправной точки. Замените ими те, что создаются в create-react-app.

Для работы с датой и временем можете воспользоваться библиотекой Moment.js.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
