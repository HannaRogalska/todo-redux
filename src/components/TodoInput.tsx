import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const getChangeInputValue = (e) => {
    setInputValue(e.target.value);
    
  }
  return (
    <div>
      <input type="text" value={inputValue} onChange={getChangeInputValue} />
      <button onClick={() => dispatch(addTodo(inputValue))}>add todo</button>
    </div>
  );
};

export default TodoInput;
