import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseURL = "https://kgnynmszwznrurzgrtdy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbnlubXN6d3pucnVyemdydGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NjEzNzMsImV4cCI6MjA2NTMzNzM3M30.WWGNsx0XI2vd48xJ5cjVyxmqfD_BeA50zaG7u5zoWJ0";

export const supabase = createClient(supabaseURL, supabaseKey);