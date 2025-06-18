import { supabase } from "./anon-connection.js";

// Initiate markdown converter
let converter = new showdown.Converter();

// Get the week number using parameter passing through HTML address
const searchParams = new URLSearchParams(window.location.search);

const postContainer = document.querySelector('#posts');

const {data: posts} = await supabase
     .from('posts')
     .select('id, title, content')
     .order('id', {ascending: true})
     .eq('week', searchParams.get('week')); // Use the week passed through the url to get the data


document.querySelector("#posts").innerHTML = posts.map(post => 
     `<article class="day">
          <div class="post-header">
               <h3>${post.title}</h3>
               <a href="update-post.html?post=${post.id}" class="action-link">Edit</a>
          </div>
          <div class="content" id="${post.id}">
               ${converter.makeHtml(post.content)}
          </div>
     </article>
     `
).join('');