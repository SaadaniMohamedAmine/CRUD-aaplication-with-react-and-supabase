//clinet.js supabase config
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://lrhhkqpjxeubehhtxrzx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM5ODEyMCwiZXhwIjoxOTU4OTc0MTIwfQ.2Qs32Zjq01w0R8WZhXG1Rg-0tkLeJn_2ReEwyevWE3Y"
);

export default supabase;
