import { createClient } from '@supabase/supabase-js'
const supabaseUrl = ''
const supabaseKey = ''
//  must use env
export const supabase = createClient(supabaseUrl, supabaseKey)