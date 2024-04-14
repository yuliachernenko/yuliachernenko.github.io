const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const fetchData = (url) => {
  return fetch(url)
    .then(response => {
      if (response.status >= 400) {
        return response.json().then(err => {
          const error = new Error('Something went wrong!')
          error.data = err
          throw error
        })
      }
      return response.json()
    })
};

fetchData(url)
  .then(posts => {
    let result = ''
    posts.forEach(item => {
      result += template(item)
    })
    document.getElementById("blog").innerHTML = result;
  })
  .then(() => {
    const users = document.querySelectorAll('.author');
    users.forEach(user => {
      fetchData(`https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
        .then(userResponse => {
         const userName = userResponse.name;
          user.textContent = userName;
        });
    });
  });

 