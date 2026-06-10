import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vwfcethihnckwnjmmzsy.supabase.co'
const supabaseKey = 'sb_publishable_8F5TmjpAvetOOesaF_4HDA_6z8EhpDB'
//  must use env
export const supabase = createClient(supabaseUrl, supabaseKey)