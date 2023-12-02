import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../../const/env";

const client = createClient(String(SUPABASE_URL), String(SUPABASE_ANON_KEY));

export default client;
