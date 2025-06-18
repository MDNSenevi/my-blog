import { supabase } from "./connection.js";

// Initiate markdown converter
let converter = new showdown.Converter();

// Get the week number using parameter passing through HTML address
const searchParams = new URLSearchParams(window.location.search);

const {data, error} = await supabase
     .from('posts')
     .select('*')
     .eq('week', searchParams.get('week')); // Use the week passed through the url to get the data

// let htmlContent = converter.makeHTML();
document.querySelector("#posts").innerHTML = data.map(post => 
     `<article class="day">
          <div class="post-header">
               <h3>${post.title}</h3>
          </div>
          <div class="content" id="${post.id}">
               ${converter.makeHtml(post.content)}
          </div>
     </article>
     `
).join('');