import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[]
}
const initialState: TodoState = {
    todos: []
}

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
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;