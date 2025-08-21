import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TodoState } from "../../types/types";

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const changeTodo = state.todos.find((todo) => todo.id === action.payload);
      if(changeTodo) changeTodo.completed = !changeTodo.completed
    },
  },
});
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
