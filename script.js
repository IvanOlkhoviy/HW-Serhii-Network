
const postButt = document.getElementById("postButt");
const showLastButt = document.getElementById("showLastButt");
const showAllButt = document.getElementById("showAllButt");
const postStatus = document.getElementById("postStatus");
const statusValue = document.getElementById("statusValue")
const lastPostValue = document.getElementById("lastPostValue")
const allPosts = document.getElementById("allPosts")

const posts = [];

function postMethod(){
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
    .then((response) => {
        statusValue.innerHTML = response.status;
        return response.json()
    })
    .then((json) => {
        posts.push(json);
    })
    .catch(e =>{
        throw e;
    })
}


function showLastPost(){
    let value = posts[posts.length - 1];
    lastPostValue.innerHTML = JSON.stringify(value);
}

function showAllPosts(){
    allPosts.innerHTML = JSON.stringify(posts);
}


postButt.onclick = () =>{
    postMethod();
}

showLastButt.onclick = () =>{
    showLastPost();
}


showAllButt.onclick = () =>{
    showAllPosts();
}


  