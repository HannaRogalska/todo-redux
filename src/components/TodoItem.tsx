import { useSelector } from "react-redux";
import type { RootState } from "../store/store"

const TodoItem = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  console.log(todos);
  
  return (
    <ol>
      {/* {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(todo.id)}
                checked={todo.completed}
              />
              {todo.title}
            </label>
          </li>
        );
      })} */}
    </ol>
  );
};

export default TodoItem;
