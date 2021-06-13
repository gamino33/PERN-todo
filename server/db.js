import * as DB from "./dbKey.js";
// import * as pg from 'pg'
// const { Pool } = pg;

import pg from "pg";

const pool = new pg.Pool({
    user: DB.USER,
    password: DB.PASSWORD,
    host: DB.HOST,
    port: DB.PORT,
    database: DB.DATABASE
});

export default pool;
// module.exports = pool;
