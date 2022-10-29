#CashFlow - Приложение для учета финансов, с возможностью регистрации, добавления и удаления своих доходов/расходов, также добавления новых категорий, отображение данных на диаграмме и возможностью фильтрации их по датам, реализовано, работая в команде c https://github.com/martynov-a-d и https://github.com/JPoznyak по методологии Agile Scrum.

Отличается от других подобных приложений простотой использования и лаконичностью, понятным интерфейсом, не нагроможденным большим количеством данных. В проекте были использованы следующие технологии: GitHub, Trello, Telegramm, Discord, Zoom (коммуникация), Firebase (хранение данных), JS, TypeScript, React, MUI material, React datepicker, Redux, Chart.js.

Ссылка на доску Trello: https://trello.com/b/Na0D0YkC/scrum-project. Ссылка на Firebase: https://console.firebase.google.com/project/cash-flow-gb/database/cash-flow-gb-default-rtdb/data.

В проекте мной сделано:

- Страница Sign Up (компонент SignUp.tsx).
- Меню практически на каждой странице с переходами по страницам приложения.
- На главной странице switcher кнопка "C" с функцией удаления всей информации из поля ввода.
- На главной странице добавлена меняющаяся иконка выбора категории, при нажатии на которую, открывается список категорий.
- На странице addcategory добавлена строка с переключающимся выбором типа категории (Expences/Income).
- Верхняя часть страницы report, где при нажатии на одну из трех кнопок меняется значение на текущий день, месяц или год.
- Страница history - календарь с возможностью выбора диапазона дат.
- Страница history - совместными усилиями отображение данных из realtime database Firebase ('UserData').
- Подключение realtime database Firebase.
- Авторизация и хранение данных пользователей в Firebase.
- В Firebase добавлен массив CategoriesList и совместными усилиями его отображение в приложении (на главной странице при нажатии на иконку "Дом" открывается список категорий.
- На странице addcategory функция добавления новой категории в Firebase (массив CategoriesList) и отображение на главной странице списка категорий, включающего добавленную.
- На главной странице добавлена иконка календаря с возможностью выбора даты и ее записи в Firebase.
- На главной странице вся логика добавления расхода/дохода пользователя (dataId, date, img, inputValue, typeId) в Firebase (массив UserData).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run eject`
