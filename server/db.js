import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new pg.Pool({
    user: process.env.ENV_USER,
    password: process.env.ENV_PASSWORD,
    host: process.env.ENV_HOST,
    port: process.env.ENV_PORT,
    database: process.env.ENV_DATABASE,
    ssl: { rejectUnauthorized: false }
});

export default pool;
