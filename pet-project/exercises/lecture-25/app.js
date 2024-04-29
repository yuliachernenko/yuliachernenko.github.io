//1. Маємо масив list
const list = ['html', 'css', 'javascript', 'react.js'];
// Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.
let ul = document.createElement('ul');

list.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});
document.body.appendChild(ul);

//2.Маємо масив listWithHref
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
//2.Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, де кожний елемент списку є тегом a з відповідним посиланням. Наприклад, для першого елемента списку:

let ol = document.createElement('ol');

listWithHref.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = Object.values(item)[0]; 
    a.textContent = Object.keys(item)[0];
    li.appendChild(a);
    ol.appendChild(li);
});
document.body.appendChild(ol); 

//3.Маємо масив students
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]
//Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків таблиці - firstName, lastName, degree. Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку.

function createTable() {
    const table = document.createElement('table');
    const headerRow = table.insertRow(0);
    const headers = ['firstName', 'lastName', 'degree'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.backgroundColor = 'blue';
        th.style.color = 'azure'; 
        headerRow.appendChild(th);
    });

    students.forEach(student => {
        const row = table.insertRow();
        Object.values(student).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    document.body.appendChild(table);
}

createTable();

 