import { supabase } from "./connection.js";

const form = document.querySelector("form");

form.addEventListener('submit', async (event) => {
     event.preventDefault();

     let formData = new FormData(form);
     const week = formData.get('week');
     const title = formData.get('title');
     const content = formData.get('content');

     const {data} = await supabase
          .from('posts')
          .insert({
               title, content, week
          })
          .select()
          .single();

     window.location.href = `week-${week}.html?week=${week}`;
});