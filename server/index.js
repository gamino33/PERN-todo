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
        //console.log(newTodo);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all todo
app.get("/todos", async(req, res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo
app.get("/todos/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});

//update todo
app.put("/todos/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const description = req.body.description;
        const updateTodo = pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo was updated!!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete todo
app.delete("/todos/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const deleteTodo = pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted!!");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
});
