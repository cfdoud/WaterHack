import 'react-native-url-polyfill/auto'

import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
    'https://tigpoblzrqgxyhclqwmh.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZ3BvYmx6cnFneHloY2xxd21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyMTgwNzksImV4cCI6MTk5Nzc5NDA3OX0.3v8-rt0mXt6y6P2PCXHMNdRUuHLQhoilD8ZHJt36LSg')
export default supabase;

