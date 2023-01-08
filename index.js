let postsArr = [];

function renderPosts() {
  let html = "";
  postsArr.forEach(function (post) {
    html += `
                      <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        <hr>`;
  });
  document.getElementById("blogpost").innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    postsArr = data.slice(0, 5);
    console.log(postsArr);
    renderPosts();
  });

document.getElementById("new-post").addEventListener("submit", function (e) {
  e.preventDefault();
  const titleEl = document.getElementById("post-title").value;
  const bodyEl = document.getElementById("post-body").value;
  let newPost = {
    title: titleEl,
    body: bodyEl,
  };
  console.log(newPost);

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((newPost) => {
      postsArr.unshift(newPost);
      renderPosts();
    });
});
