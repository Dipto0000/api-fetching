/* 
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log(data)) 
*/

/* 
function userLoaded(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => displayUsers(users))
}

function displayUsers(users){
    const usersUl = document.getElementById('users-ul');
    for(const user of users){
        const createUl = document.createElement('li');
        createUl.innerText = `Name: ${user.name}, Email: ${user.email}`;
        usersUl.appendChild(createUl)
    }
}
*/

function postLoaded() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => postLoader(posts));
}

/* 31 line er postLoader er parameter e jekono value e to bosano jabe. akhon 27 number line theke just post er value ta data te bose jacche*/
function postLoader(data) {
  const usersUl = document.getElementById("users-ul");
  for (const post of data) {
    console.log(post.title);
    const li = document.createElement("li");
    li.innerText = post.title;
    usersUl.appendChild(li);
  }
}
