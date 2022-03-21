// import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  priorityFilterSelector,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority === "None"
          ? todo.name.includes(searchText)
          : todo.name.includes(searchText) && priority.includes(todo.priority);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority === "None" ? true : priority.includes(todo.priority))
      );
    });
  }
);
