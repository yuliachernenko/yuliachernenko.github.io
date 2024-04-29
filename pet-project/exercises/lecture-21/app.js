
//const fruits = 'apple banana cantaloupe blueberries grapefruit';
//1. Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(' ')
console.log(fruits);


//2. Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//3. Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
let n = 0;
while (n < fruits.length) {
    console.log(fruits[n]);
    n++;
}

//4. Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
let x = 0;
do {
    console.log(fruits[x]);
    x++;
} while (x < fruits.length);

//5. Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.

for (const fruit of fruits) {
console.log(fruit);
}

const Numbs = [1,2,3,4,5,6,7,8,9,10];
//6.Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.

for (let i = 1; i < Numbs.length; i +=2) {
    console.log(Numbs[i]);
}

//Маємо масив names. 
//7. Додати 'Joker' в кінець масиву names:

const names = ['Batman'];
names.push('Joker');
console.log(names);

//Маємо масив names:
//8.Додати 'Joker' на початок масиву names
const names2 = ['Batman'];
names2.unshift('Joker');
console.log(names2);

//Маємо масив names:
//9. Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
const names3 = ['Batman', 'Joker', 'Bane'];
names3.unshift('Catwoman');
console.log(names3);

//Маємо масив names:
//10.Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
const names4 = ['Batman', 'Joker', 'Bane'];
names4.splice(0, 0, 'Catwoman');
console.log(names4);

//11. Додати до names елемент 'Catwoman', розмістивши його з індексом 1
const names5 = ['Batman', 'Joker', 'Bane'];
names5.splice(1, 0, 'Catwoman');
console.log(names5);

//Маємо масив names
//12.Видалити елементи 'Catwoman' і 'Joker' з масиву names:
const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
delete names6[1];
delete names6[2];
console.log(names6);

//Маємо масив names:
//13. Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names7[1] = 'Alfred';
names7[2] = 'Alfred';
console.log(names7);

//14. Маємо масив names:
//Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
const names8 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (!names8.includes('Alfred')) {
    names8.push('Alfred');
}
console.log(names8);

//Маємо масив names:
//15. Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
const names9 = ['Batman', 'Catwoman','Joker', 'Bane'];
const indexToRemove = names9.indexOf('Alfred');
if (indexToRemove !== -1) {
    names9.splice(indexToRemove, 1);
}
console.log(names9);




