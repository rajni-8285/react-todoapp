const Todo = require("../models/Todo");

// GET TODOS
const getTodos = async (req, res) => {

  const todos = await Todo.find();

  res.json(todos);
};

// ADD TODO
const addTodo = async (req, res) => {

  const newTodo = new Todo({
    task: req.body.task,
  });

  const savedTodo = await newTodo.save();

  res.json(savedTodo);
};

// UPDATE TODO
const updateTodo = async (req, res) => {

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      task: req.body.task,
    },
    {
      new: true,
    }
  );

  res.json(updatedTodo);
};

// DELETE TODO
const deleteTodo = async (req, res) => {

  await Todo.findByIdAndDelete(req.params.id);

  res.json({
    message: "Todo Deleted",
  });
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};

