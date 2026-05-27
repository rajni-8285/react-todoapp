const express = require("express");

const router = express.Router();

const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// GET
router.get("/", getTodos);

// POST
router.post("/", addTodo);

// PUT
router.put("/:id", updateTodo);

// DELETE
router.delete("/:id", deleteTodo);

module.exports = router;