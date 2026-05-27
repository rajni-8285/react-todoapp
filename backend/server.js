const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const Todo = require("./models/Todo");

const app = express();

app.use(cors());
app.use(express.json());


// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});


// GET ALL TODOS
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});


// CREATE TODO
app.post("/todos", async (req, res) => {

  const newTodo = new Todo({
    text: req.body.text,
  });

  await newTodo.save();

  res.json(newTodo);
});


// UPDATE TODO
app.put("/todos/:id", async (req, res) => {

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );

  res.json(updatedTodo);
});


// DELETE TODO
app.delete("/todos/:id", async (req, res) => {

  await Todo.findByIdAndDelete(req.params.id);

  res.json({
    message: "Todo Deleted",
  });
});


// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});


// SERVER
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});