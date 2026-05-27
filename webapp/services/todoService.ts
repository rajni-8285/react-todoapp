const API_URL = "http://localhost:5000/todos";

// GET TODOS
export const getTodos = async () => {

  const response = await fetch(API_URL);

  return response.json();
};

// ADD TODO
export const addTodo = async (task: string) => {

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
};

// UPDATE TODO
export const updateTodo = async (
  id: string,
  task: string
) => {

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
};

// DELETE TODO
export const deleteTodo = async (id: string) => {

  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};