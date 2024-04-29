//1. Маємо код
//Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
console.log(str1.length);//13
console.log(str2.length);//13
console.log(str1 == str2);//true
console.log(str1 === str2);//true

// 2. Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
let string5 = 'Hello World';
console.log(string5[0]);
console.log(string5.charAt(0));
 
//3. повернути символ J рядка str3:
let str3 = "Hello Javascript";
console.log(str3.indexOf("J"));

//4.Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
console.log(str3.slice(-1));
console.log(str3[str3.length -1]); 

//5.Напишіть три варіанти функції lastChar, що повертає останній символ рядка

function lastChar(str1) {
    return str1.charAt(str1.length-1)
}
console.log(lastChar(str1));

function lastChar(str2) {
    return str2.slice(-1)
}
console.log(lastChar(str2));

function lastChar(str3) {
    return str3[str3.length -1]
}
console.log(lastChar(str3));

//6. Маємо код. Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey

let a = 'When candles are out,';
let b = 'all cats are grey.';
console.log(a.concat(b));

//7. Маємо код. Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15
let fact = "Fifteen is the same as"
let a1 = 5;
let b1 = 10;

console.log(fact + " " + (a1 + b1));

//8. Маємо код Напишіть функцію getFullName, що повертає результат: "Tom Cat"
let firstName = "Tom";
let lastName = "Cat";
function getFullName(c, d) {
    return c + " " + d;
}
console.log(getFullName(firstName, lastName));

//9.Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
let text = "Hello,";
function greeting (text, getFullName) {
    return text + " " + getFullName(firstName, lastName) + "!";  
}
console.log(greeting(text, getFullName));

//10.Використовуючи функцію greeting, створити такий шаблон:

//<div><h1>Hello, Tom Cat!</h1></div>
let template = (x,y) => `
    <div><h1> ${greeting(x, y)}</h1>
    </div>`
console.log(template(text, getFullName));

//11. Маємо наступний код:
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"
console.log("  The name of our game  ".trim());
console.log( "  The name of our game  ".trimStart());
console.log("  The name of our game  ".trimEnd());

// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'

const phoneNumber = '\t  555-123\n ';
console.log(phoneNumber.trim());
console.log(phoneNumber.trimStart());

//12.Маємо наступний код:
let sentence = 'Always look on the bright side of life';
// Перевірити, чи містить рядок значення 'look up'
// Перевірити, чи містить рядок значення 'look on'
// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
 let pattern = /look up/gi;
 let result = sentence.match(pattern);
console.log(result); 
 let pattern1 = /look on/gi;
 let result1 = sentence.match(pattern1);
console.log(result1); 
let pattern2 = /look on/gi;
 let result2 = sentence.substring(8).match(pattern2);
console.log(result2);
 
//13.Маємо наступний код
// Знайти індекс символу 'l'
let sentence1 = 'Always look on the bright side of life';
let result3 = sentence1.indexOf('l');
console.log(result3);
// Знайти індекс символу 'l', починаючи з 3-ї позиції
let result4 = sentence1.substring(3).indexOf('l');
console.log(result4);
// Знайти індекс символу 'L'
let result5 = sentence1.indexOf('L');
console.log(result5);

//14.Маємо наступний код:
let sentence3 = 'Always look on the bright side of life';
//Отримати підрядок 'look on the bright side of life'
let search_pattern = "look on the bright side of life";
let search_result = sentence3.search(search_pattern);
if (search_result >= 0) {
    console.log("Searched Pattern is found at position : " + search_result);
} else {
    console.log("Searched Pattern not found.")
};
//Отримати підрядок 'Always'
let search_pattern1 = "Always";
let search_result1 = sentence3.search(search_pattern1);
if (search_result1 >= 0) {
    console.log("Searched Pattern is found at position : " + search_result1);
} else {
    console.log("Searched Pattern not found.")
};
//Отримати підрядок 'look'
let search_pattern2 = "look";
let search_result2 = sentence3.search(search_pattern2);
if (search_result2 >= 0) {
    console.log("Searched Pattern is found at position : " + search_result2);
} else {
    console.log("Searched Pattern not found.")
};

//15.Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.function validate(number) {
function validate(name) {    
const pattern = /^[a-z0-9_-]{8,16}$/;

    let matched = name.match(pattern);
    if (pattern.test(name)) {
        console.log("Name is valid", matched);
        return true;
    } else {
        console.log("Name is not valid", matched);
        return false;
    }
}
validate('Zara_135U');
validate('zara_135');

//16.Створити регулярний вираз, який призначений для перевірки email на коректність.
function validate(email) {    
const pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    let matched = email.match(pattern);
    if (pattern.test(email)) {
        console.log("email is valid", matched);
        return true;
    } else {
        console.log("email is not valid", matched);
        return false;
    }
}
validate('julia@gmail.com');
validate('Julia@gmail_+.com');

//17.Маємо наступний код:
let sentence5 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
//Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
//Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr

function truncateText(text) {
    return text.substring(0, 50);
}
console.log(truncateText(sentence5));


function truncateText1(text) {
    return text.substr(0, 50);
}
console.log(truncateText1(sentence5));
