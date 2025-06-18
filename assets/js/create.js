import { supabase } from "./connection.js";

const form = document.querySelector("form");

form.addEventListener('submit', async (event) => {
     event.preventDefault();

     let formData = new FormData(form);
     const week = formData.get('week');
     const title = formData.get('title');
     const content = formData.get('content');

     const {data: post} = await supabase
          .from('posts')
          .insert({
               title, content, week
          })
          .select()
          .single();

      if (post.week == 1 ) {
           window.location.href = `index.html?week=${post.week}`;
     } else {
           window.location.href = `week-${post.week}.html?week=${post.week}`;
     } 
});