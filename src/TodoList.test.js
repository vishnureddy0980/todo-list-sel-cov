// src/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

test('renders Simple To-Do List text', () => {
  render(<TodoList />);
  const textElement = screen.getByText(/Simple To-Do List/i);
  expect(textElement).toBeInTheDocument();
});

test('adds a new task', () => {
  render(<TodoList />);
  
  // Type a task into the input
  const inputElement = screen.getByPlaceholderText(/Enter a new task/i);
  fireEvent.change(inputElement, { target: { value: 'Test Task' } });

  // Click the "Add Task" button
  const addButton = screen.getByText(/Add Task/i);
  fireEvent.click(addButton);

  // Check if the new task is in the list
  const taskElement = screen.getByText(/Test Task/i);
  expect(taskElement).toBeInTheDocument();
});

test('deletes a task', () => {
  render(<TodoList />);
  
  // Add a task
  const inputElement = screen.getByPlaceholderText(/Enter a new task/i);
  fireEvent.change(inputElement, { target: { value: 'Test Task' } });
  const addButton = screen.getByText(/Add Task/i);
  fireEvent.click(addButton);

  // Delete the task
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  // Check if the task is no longer in the list
  const taskElement = screen.queryByText(/Test Task/i);
  expect(taskElement).not.toBeInTheDocument();
});
