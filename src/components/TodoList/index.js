import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import "./styles.scss";
import Todo from "../Todo";
import { addTodo } from "../../redux/actions";
import { todoListSelector } from "../../redux/selectors";


export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoListSelector);

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    setTodoName('');
    setPriority('Medium')
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} priority={todo.priority} />
        ))}
      </ul>
      <div className="input-group">
        <input
          className="add-item"
          type="text"
          value={todoName}
          onChange={handleInputChange}
        />
        <select
          className="add-priority"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button className="primary" onClick={handleAddButtonClick}>
          Add
        </button>
      </div>
    </div>
  );
}
