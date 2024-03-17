//Домашнє завдання 20
//1. Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль

const person = {
    name: "Julia",  
    age: 18
}
console.log(person.name);
console.log(person.age);

//2.Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
const person1 = {
    name: {
        firstName: "Julia",
        lastName: "Chernenko"
    },
    age: 18,
 //3.Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.   
    bio() {
        return `${this.name.firstName} ${this.name.lastName} ${this.age}`;
    },
//4.Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
    introduceSelf() {
        return `Hi! I'm ${this.name.firstName}`;
    }
}
console.log(person1.name.firstName);
console.log(person1.name.lastName);
console.log(person1.bio());
console.log(person1.introduceSelf())

//5. Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта
function createPerson(name) {
    this.name = name;
    this.introduceSelf = function() {
    return `Hi! I'm ${this.name}`};
}
const Person1 = new createPerson("Solomia");
const Person2 = new createPerson("Tad");
console.log(Person1.introduceSelf());
console.log(Person2.introduceSelf());

//6. Створити функцію - конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
//визначити, чи містить об'єкт mary властивість під назвою prop.
function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
    return `Hi! I'm ${this.name}`};
}
const Person3 = new Person("Mary");
const Person4 = new Person("Tom");
console.log(Person3.introduceSelf());
console.log(Person4.introduceSelf());
console.log(Person3.hasOwnProperty('prop'));

//7.Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() При виклику методу excuse_my_french(), на консоль виводиться:
const DirtyMartini = {
    english_please () {
        return text1
    },
excuse_my_french () {
        return text2
    }
}
let text1 = `ingredients:
6 fluid ounces gin
1 dash dry vermouth (0.0351951ml) 
1 fluid ounce brine from olive jar
4 stuffed green olives`;

let text2 =`ingrédients:
170.4786 ml de gin,
1 trait de vermouth sec(0.0351951ml)
28.4131 ml de saumure du pot d'olive
4 olives vertes farcies`;

console.log(DirtyMartini.english_please());
console.log(DirtyMartini.excuse_my_french());






