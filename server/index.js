import express from "express";
import cors from "cors";
import pool from "./db.js";
const PORT = process.env.PORT || 5000

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
    console.log(process.env);
});
