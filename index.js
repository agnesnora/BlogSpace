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

/**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

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

document.getElementById("new-post").addEventListener("submit", function (e) {
  e.preventDefault();
  const titleEl = document.getElementById("post-title").value;
  const bodyEl = document.getElementById("post-body").value;
  let newPost = {
    title: titleEl,
    body: bodyEl,
  };
  console.log(newPost);

  /**
   * Challenge: Send this off to the server!
   *
   * 1. BaseURL: https://apis.scrimba.com/jsonplaceholder/
   * 2. Endpoint: /posts
   * 3. method: ???
   * 4. Request body: ??? (Remember to turn it into JSON)
   * 5. Headers: ??? (Check the JSON Placeholder API docs or past casts for help)
   */

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(
      (newPost) => console.log(newPost),
      (document.getElementById("blogpost").innerHTML = `
    <h2>${newPost.title}</h2> 
    <p>${newPost.body}</p>
    <hr>
    ${document.getElementById("blogpost").innerHTML}`)
    );
});
