import type { Config } from 'drizzle-kit';
import * as dotenv from "dotenv";

// Read the .env file if it exists, or a file specified by the
// dotenv_config_path parameter that's passed to Node.js
dotenv.config();

if (!process.env.DATABASE_URL_DEV) throw new Error('DATABASE_URL_DEV not found in environment');

export default {
    schema: './db/schema.ts',
    out: './db/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL_DEV,
    },
    strict: true,
} satisfies Config;