"use client";

import { useEffect, useState } from "react";

import TodoForm from "../components/TodoForm";

import TodoItem from "../components/TodoItem";

import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../services/todoService";

import { Todo } from "../types/todo";

export default function Home() {

  const [task, setTask] = useState("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const [editingId, setEditingId] = useState("");

  // FETCH TODOS
  const fetchAllTodos = async () => {

    const data = await getTodos();

    setTodos(data);
  };

  // ADD OR UPDATE
  const handleSubmit = async () => {

    if (!task) return;

    if (editingId) {

      await updateTodo(editingId, task);

      setEditingId("");

    } else {

      await addTodo(task);
    }

    setTask("");

    fetchAllTodos();
  };

  // EDIT
  const handleEdit = (todo: Todo) => {

    setTask(todo.task);

    setEditingId(todo._id);
  };

  // DELETE
  const handleDelete = async (id: string) => {

    await deleteTodo(id);

    fetchAllTodos();
  };

  useEffect(() => {
    fetchAllTodos();
  }, []);

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
         Todo App
      </h1>

      <TodoForm
        task={task}
        setTask={setTask}
        onSubmit={handleSubmit}
        editing={!!editingId}
      />

      {todos.map((todo) => (

        <TodoItem
          key={todo._id}
          todo={todo}
          onEdit={() => handleEdit(todo)}
          onDelete={() => handleDelete(todo._id)}
        />

      ))}

    </div>
  );
}