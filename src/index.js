import React from "react"  //импортируем React
import reactDom from "react-dom" //импортируем ReactDom
import "bootstrap/dist/css/bootstrap.css" //импортируем стили CSS


const element = <h1>Hello world</h1>
//запись выше эквивалентна следующей
const element2 = React.createElement("h1", null, "Hello React")
//мы получим асолютно такой же элемент, таким образом мы упрощаем разработку React элементов


console.log(element)
console.log(element2)


//ReactDom
//как мы помним, если создадим элемент через JS, то он не мможет отобразиться на странице HTML,
//нам нужен определённый DIV в который мы можем его поместить, поэтому вторым параметром мы передаем такой DIV

reactDom.render(element, document.getElementById("root"))
//Предупреждение: ReactDOM.render больше не поддерживается в React 18. Вместо этого используйте createRoot. Пока вы не переключитесь на новый API, ваше приложение будет работать так, как если бы оно работало под управлением React 17. Подробнее: https://reactjs.org/link/switch-to-createroot

//таким образом JSX синтаксис упрощает разработку элемментов на React,
//и это повышаем читабельность кода, он похож на HTML разметку и его легче читать
//поэтому при разработке на React будем использовать JSX

