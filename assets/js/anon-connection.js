import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseURL = "https://kgnynmszwznrurzgrtdy.supabase.co";
const supabaseKey = "somekey";

export const supabase = createClient(supabaseURL, supabaseKey);