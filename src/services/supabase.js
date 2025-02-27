import { createClient } from "@supabase/supabase-js";

const supabaseUr1 = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUr1, supabaseKey);
export default supabase;
