/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';

/**
 * Manages the Todos by reading from and writing to the backend API.
 *
 * @returns {Object} with the following properties:
 *   isLoading: a boolean indicating if the data has not yet loaded;
 *   error: any error that occurred
 *   todos: a list of To Do items;
 *   addTodo: a function (newTodo) that will add a new To Do;
 *   toggleCompleted: a function (todoId) that will toggle the completion of an existing To Do.
 */

export function useTodos() {
  const [todos, setTodos] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (todos === undefined) {
      fetchData();
    }
  }, [todos]);

  /* TODO: If `todos` hasn't been defined yet, read the items from the API
   * and set them into the `todos` state.
   */

  async function fetchData() {
    try {
      const data = await readTodos();
      setTodos(data);
    } catch (error) {
      setError(error);
    }
  }

  async function addTodo(newTodo) {
    try {
      const createdTodo = await createTodo(newTodo);
      setTodos((prevTodos) => prevTodos.concat(createdTodo));
    } catch (error) {
      setError(error);
    }
  }

  /* TODO: Call the API function that creates a Todo item.
   * When the promise returned by that function resolves, update the `todos` state.
   * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
   */

  async function toggleCompleted(todoId) {
    try {
      const todo = todos.find((todo) => todo.id === todoId);
      todo.isCompleted = !todo.isCompleted;
      const updated = await updateTodo(todo);
      const allTodos = todos.map((original) =>
        original.todoId === updated.todoId ? updated : original
      );
      setTodos(allTodos);
    } catch (error) {
      setError(error);
    }
  }

  /* TODO: Find the Todo item being updated, toggle its completed prop, and call
   * the API function that updates a Todo item.
   * When the promise returned by that function resolves, update the `todos` state.
   * When updating this state, use the updated `todo` returned from the API.
   * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
   */

  return {
    isLoading: todos === undefined && error === undefined,
    error,
    todos,
    addTodo,
    toggleCompleted,
  };
}

/**
 * Reads all To Do items from the API.
 * @returns Promise that resolves with the read items.
 */
async function readTodos() {
  const res = await fetch('/api/todos');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Creates a new To Do item using the API.
 * @param todo The To Do to create.
 * @returns Promise that resolves with the new item returned from the API.
 */
async function createTodo(todo) {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Updates a To Do item using the API by setting its `isCompleted` state.
 * @param todo The To Do to update.
 * @returns Promise that resolves with the updated To Do item.
 */
async function updateTodo(todo) {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: todo.isCompleted }),
  };
  const res = await fetch(`/api/todos/${todo.todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
