
setTimeout(myFunction, 10000);
function myFunction() {
    const firstName = document.querySelector('input[name="firstName"]').value.trim();
    const lastName = document.querySelector('input[name="lastName"]').value.trim();
    if (!firstName && !lastName) {
    document.getElementById('waiting').textContent = "I'm miss You";
  } else {
    document.getElementById('waiting').textContent = `Hello ${firstName} ${lastName}!`;
    }
}

//Створити новий об'єкт xhr, як екземпляр XMLHttpRequest. Надіслати запит на веб-сервер https://jsonplaceholder.typicode.com/posts, використовуючи методи open() і send().
let xhr = new XMLHttpRequest();
let url = 'https://jsonplaceholder.typicode.com/posts'
xhr.open('GET', url, true);

const template = (item) => `
       <h3>${item.title}</h3>
       <div>${item.body}</div>`;

xhr.onload = function () {
    const response = JSON.parse(xhr.responseText);
    let postsHTML = "";
    response.forEach(post => {
        postsHTML += template(post);
    });    
document.getElementById("demo").innerHTML = postsHTML;
};

xhr.send();