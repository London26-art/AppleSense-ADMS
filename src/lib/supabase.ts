import { createClient } from '@supabase/supabase-js';
const url=process.env.NEXT_PUBLIC_SUPABASE_URL||'https://vqpeqyzrgcuzxiadltrq.supabase.co';
const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'';
export const db=createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
