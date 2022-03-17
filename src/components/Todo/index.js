import { useState } from "react";
import "./styles.scss";


export default function Todo({ name, priority }) {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
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
