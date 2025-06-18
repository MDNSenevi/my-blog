import { supabase } from "./connection.js";

const form = document.querySelector("form");

// Get the parameters passed through HTML address
const searchParams = new URLSearchParams(window.location.search);

const postID = searchParams.get('post');

const {data: post} = await supabase
          .from('posts')
          .select('title,content, week')
          .eq('id', postID)
          .single();

const postTitleContainer = document.querySelector("#title");
const postContentContainer = document.querySelector("#content-md");
     
     console.log(post.title);

     postTitleContainer.value = post.title;

     postContentContainer.value = post.content;



// formData.set('title', post.title);

form.addEventListener('submit', async (event) => {
     event.preventDefault();

    let formData = new FormData(form);
     const postTitle = formData.get('title');
     const postContent = formData.get('content');

     

     const {data, error} = await supabase
          .from('posts')
          .update({
               title: postTitle, 
               content: postContent
          })
          .eq('id', searchParams.get('post'))
          .select()
          .single();

     if (post.week == 1 ) {
           window.location.href = `index.html?week=${post.week}`;
     } else {
           window.location.href = `week-${post.week}.html?week=${post.week}`;
     } 

    
});