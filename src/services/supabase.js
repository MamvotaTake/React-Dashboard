
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pqztkjmvdhhuafbbbmwv.supabase.co'
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxenRram12ZGhodWFmYmJibXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4MzU1MDcsImV4cCI6MjAwODQxMTUwN30.wsn96jl2O5mQOYPfS0daAJSEtY20gLEVE_VSAWgBSOc"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase