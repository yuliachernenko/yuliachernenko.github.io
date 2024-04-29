
//ДЗ 22
const classes = ['first', 'second', 'third', 'fourth'];

//1.Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.


const h1Tag = document.getElementsByTagName('h1');
console.log('h1Tag: ', h1Tag); 
console.log(typeof h1Tag);
console.log(h1Tag.length);
for (i = 0; i < h1Tag.length; i++) {
    console.log(h1Tag[i])
};

//2. Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"
element1 = document.querySelector('#p1');
console.log(element1);
p1.style.backgroundColor = "gold";

//3. Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;
element2 = document.querySelector('#p2');
console.log(element2);
// p2.style.backgroundColor = "gold";
// p2.style.color = "blue";
// p2.style.fontSize = "2rem";
element2.style.cssText = 'background-color:gold; color: blue; font-size: 2rem;';

//4.Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third
element3 = document.querySelector('#p3');
console.log(element3);
element3.classList.add('third');

//5. Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. Призначити для нього класи fourth та border
element4 = document.querySelector('#p4');
console.log(element4);
element4.classList.add('fourth', 'border');

//6. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.
const allСontainer = document.querySelectorAll(".container");
console.log(allСontainer);
for (i = 0; i < allСontainer.length; i++) {
 console.log(allСontainer[i].children[0]);
}

//7.Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.

for (i = 0; i < allСontainer.length; i++) {
 console.log(allСontainer[i].children[0].textContent);
}

//8. Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином

// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4 зберегти початкові атрибути id та class

const headers = document.querySelectorAll(".container header");
    for (let i = 0; i < headers.length; i++) {
    switch (i) {
        case 0:
            break;
        case 1:
            headers[i].tagName = 'h2';
            break;
        case 2:
            headers[i].tagName = 'h3';
            break;
        case 3:
            headers[i].tagName = 'h4';
            break;
        default:
            break;
    }
}

// Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи таким чином
// до h1 додати клас first
// до h2 додати клас second
// до h3 додати клас third
// до h4 додати клас fourth
const classes2 = ['first', 'second', 'third', 'fourth'];
for (let i = 0; i < headers.length; i++) {
    headers[i].classList.add(classes2[i]);
}