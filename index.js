/**
 Challenge:
 
 GET a list of blog from the JSON Placeholder API.
 
 BaseURL: https://apis.scrimba.com/jsonplaceholder/
 Endpoint: /posts
 
 Since there's so many posts, let's limit the array to just 5 items.
 You can use the `.slice()` array method to just grab the first 5 objects
 from the data array that comes back from the API

  With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const postsArr = data.slice(0, 5);
    console.log(postsArr);
    let html = "";
    postsArr.forEach(function (post) {
      html += `
                        <h2>${post.title}</h2> 
                        <p>${post.body}</p>
                        <hr>`;
    });
    document.getElementById("blogpost").innerHTML = html;
  });
