import dotenv from 'dotenv';
import { Pool } from 'pg';
dotenv.config();

export const pool = new Pool({
  connectionString: process.env.SUPABASE_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});
