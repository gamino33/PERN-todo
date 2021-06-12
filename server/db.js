import * as DB from "./dbKey";
import * as pg from 'pg'
const { Pool } = pg;


const pool = new Pool({
    user: DB.USER,
    password: DB.PASSWORD,
    host: DB.HOST,
    port: DB.PORT,
    database: DB.DATABASE
});

export default pool;
