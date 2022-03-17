import "./styles.scss";

import Todo from "../Todo";

export default function TodoList() {
  return (
    <div>
      <ul >
        <Todo name="Learn React" priority="High" />
        <Todo name="Learn Redux" priority="Medium" />
        <Todo name="Learn JavaScript" priority="Low" />
      </ul>
      <div className="input-group">
        <input className="add-item" type="text" />
        <select className="add-priority">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button className="primary">Add</button>
      </div>
    </div>
  );
}
