import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase project credentials
const SUPABASE_URL = "https://zwmypwitpbviurvhryll.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3bXlwd2l0cGJ2aXVydmhyeWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NjMyNDYsImV4cCI6MjA1NTAzOTI0Nn0.zICyE02pM1Skd_gRpK653A4RqKcKtGDVqAgGDkFMWBA";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
