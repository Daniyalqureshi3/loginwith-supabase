import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://idzumvvnofpgcwnllzff.supabase.co'
const supabaseKey = 'sb_publishable_cvZlBf5r_ZFeiXBc9T5svA_wBs9zyJh'
//  must use env
export const supabase = createClient(supabaseUrl, supabaseKey)