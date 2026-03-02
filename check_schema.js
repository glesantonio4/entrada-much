import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://qwgaeorsymfispmtsbut.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3Z2Flb3JzeW1maXNwbXRzYnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODcyODUsImV4cCI6MjA3Nzk2MzI4NX0.FThZIIpz3daC9u8QaKyRTpxUeW0v4QHs5sHX2s1U1eo';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkSchema() {
    console.log("--- QUIZZES ---");
    const { data: q } = await supabase.from('quizzes').select('*').limit(1);
    if (q && q.length > 0) console.log(Object.keys(q[0]));
    else console.log("No data in quizzes");

    console.log("\n--- GANADORES ---");
    const { data: g } = await supabase.from('Ganadores').select('*').limit(1);
    if (g && g.length > 0) console.log(Object.keys(g[0]));
    else console.log("No data in Ganadores");

    console.log("\n--- PARTICIPANTES ---");
    const { data: p } = await supabase.from('participantes').select('*').limit(1);
    if (p && p.length > 0) console.log(Object.keys(p[0]));
    else console.log("No data in participantes");
}

checkSchema();
