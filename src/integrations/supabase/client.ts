// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wqztshxvsvleflllblrk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxenRzaHh2c3ZsZWZsbGxibHJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwNTY5NzgsImV4cCI6MjA1MTYzMjk3OH0.yINdLq4bSxbONmdWFTqDs0fHxHqNI6cZnWYAW1umPSI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);