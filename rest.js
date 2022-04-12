document.querySelector("#getOne").addEventListener("click", getOne);
document.querySelector("#getAll").addEventListener("click", getAll);
document.querySelector("#postData").addEventListener("click", postData);

function getOne() {
  let id = document.getElementById("postid").value;
  let url = `https://jsonplaceholder.typicode.com/posts/` + id;
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let post = JSON.parse(this.responseText);
      let html = "";

      html += `
          
          <div class="card text-center mb-2" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.body} </p>

  </div>
</div>`;

      document.querySelector("#results").innerHTML = html;
    }
  };
  xhr.send();
}

function getAll() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let posts = JSON.parse(this.responseText);
      let html = "";
      posts.forEach((post) => {
        html += `
          
          <div class="card text-center mb-2" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.body} </p>

  </div>
</div>`;
      });
      document.querySelector("#results").innerHTML = html;
    }
  };
  xhr.send();
}

function postData() {
  const data = {
    userId: 1,
    title: "new title",
    body: "new body",
  };
  let json = JSON.stringify(data);
  let url = "https://jsonplaceholder.typicode.com/posts/";
  let xhr = new XMLHttpRequest();

  xhr.open("POST", url, true);
  xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    if (xhr.status === 201 && xhr.readyState === 4) {
      let post = xhr.responseText;
      console.log(post);
    }
  };

  xhr.send(json);
}
