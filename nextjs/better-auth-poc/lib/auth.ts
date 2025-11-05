import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    host: "localhost",
    user: "myuser",
    password: "mypassword",
    database: "myapp",
    port: 5432,
    // host: process.env.PGHOST,
    // user: process.env.PGUSER,
    // password: process.env.PGPASSWORD,
    // database: process.env.PGDATABASE,
    // port: Number(process.env.PGPORT) || 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    maxLifetimeSeconds: 60,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
