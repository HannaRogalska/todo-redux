import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice"
import {loadFromLocalStorage} from "../service/localStorageService"
export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  preloadedState: loadFromLocalStorage(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;