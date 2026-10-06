import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Faltan las variables de Supabase en el archivo .env del backend");
}

// Service Role Key para bypass de RLS y operaciones directas desde Express
export const supabase = createClient(supabaseUrl, supabaseServiceKey);