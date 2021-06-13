import express from "express";
import cors from "cors";
import pool from "./db.js";
const PORT = process.env.PORT || 5000

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//create todo
app.post("/todos", async(req, res) => {
    try {
        const description = req.body.description;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
        console.log(newTodo);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
});
