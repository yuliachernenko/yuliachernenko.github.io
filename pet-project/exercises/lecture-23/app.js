//ДЗ 23

const alert = document.querySelector('.alert');
//1. Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick. Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".
const button = document.querySelector('.btn-primary');
button.onclick = function () {
    alert.classList.add('alert-primary');
    alert.textContent = 'A simple primary alert—check it out!';
};

//2. Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click". Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"
const button2 = document.querySelector('.btn-secondary');
button2.addEventListener('click', function () {
    alert.classList.add('alert-primary');
    alert.textContent = 'A simple secondary alert—check it out!';
});

//3.Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover". Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"
const button3 = document.querySelector('.btn-success');
button3.addEventListener('mouseover', function () {
    alert.classList.add('alert-success');
    alert.textContent = 'A simple success alert—check it out!';
});
//Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout, що видаляє CSS-клас alert-success з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.
button3.addEventListener('mouseout', function () {
    alert.classList.remove('alert-success');
    alert.textContent = '';
});

//4. Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus". Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!" Додати до кнопки прослуховувач події "focusout". Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.
const button4 = document.querySelector('.btn-danger');
button4.addEventListener('focus', function () {
    alert.classList.add('alert-danger');
    alert.textContent = 'A simple danger alert—check it out!';
});
//Додати до кнопки прослуховувач події "focusout". Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.
button4.addEventListener('focusout', function () {
    alert.classList.remove('alert-danger');
    alert.textContent = '';
});

//5.Знайти на сторінці кнопки з класом btn-dark та btn-light. Написати функцію toggleMode, що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle(). Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку. Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки, якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light
const darkButton = document.querySelector('.btn-dark');
const lightButton = document.querySelector('.btn-light');
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
    darkButton.style.display = 'none';
    lightButton.style.display = 'block';
  } else {
    darkButton.style.display = 'block';
    lightButton.style.display = 'none';
  }
};
darkButton.addEventListener('click', toggleMode);
lightButton.addEventListener('click', toggleMode);

//6. Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter". Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault(). Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert та змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";
const button5 = document.querySelector('.btn-info');
button5.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        alert.classList.add('alert-info');
        alert.textContent = 'A simple info alert—check it out!';
    }
});

//7.Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом .card-title
const elementCards = document.querySelectorAll('.card');
for (i = 0; i < elementCards.length; i++) {
    const titleCards = document.querySelectorAll('.card-title');
 console.log(titleCards[i].textContent);
};

//8.Знайти на сторінці всі селектори .card. Використовуючи цикл for, знайти для кожного елемента .card кнопку з класом .add-to-cart, додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст кожного елемента з класом .card-title

const cards = document.querySelectorAll('.card');
for (const card of cards) {
  const addToCartButton = card.querySelector('.add-to-cart');
  addToCartButton.addEventListener('click', () => {
    const cardTitle = card.querySelector('.card-title');
    console.log(cardTitle.textContent);
  });
}