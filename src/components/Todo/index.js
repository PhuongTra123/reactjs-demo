import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodoStatus } from "../../redux/actions";
import "./styles.scss";


export default function Todo({ id, name, priority, completed }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id))
  };

  return (
    <div
      className="group-item"
      style={{
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <label className="item">
        <input className="item-checkbox" type="checkbox" checked={checked} onChange={toggleCheckbox} />
       <span>{name}</span> 
      </label>

      <span className="item-priority">
        {priority}
      </span>
    </div>
  );
}
