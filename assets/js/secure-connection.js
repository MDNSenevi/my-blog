import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabase = createClient(
     import.meta.env.VITE_SB_URL_BLOG, 
     import.meta.env.VITE_SB_KEY_BLOG
);