import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../const';

console.log(SUPABASE_URL)
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
