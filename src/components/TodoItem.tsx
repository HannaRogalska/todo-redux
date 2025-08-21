import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { toggleTodo } from "../features/todo/todoSlice";
import { useEffect } from "react";

const TodoItem = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  console.log(todos);
  const dispatch: AppDispatch = useDispatch();
  return (
    <ol>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(toggleTodo(todo.id))}
                checked={todo.completed}
              />
              {todo.title}
            </label>
          </li>
        );
      })}
    </ol>
  );
};

export default TodoItem;
