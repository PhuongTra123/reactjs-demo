import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { priorityFilterChange, searchFilterChange } from "../../redux/actions";
import { statusFilterChange } from "../../redux/actions";
import "./styles.scss";

function Filters(props) {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("None");

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  const handlePriorityFilterChange = (e) => {
    setFilterPriority(e.target.value)
    dispatch(priorityFilterChange(e.target.value))
  }

  return (
    <>
      <div className="form-group">
        <label className="form-label">Search</label>
        <input
          type="text"
          placeholder="Input search text"
          className="form-control"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>
      <div className="form-group">
        <p className="form-label">Filter By Status</p>
        <div
          className="radio-group"
          value={filterStatus}
          onChange={handleStatusChange}
        >
          <label className="radio" >
            All
            <input type="radio" name="status" value="All" />
          </label>
          <label className="radio">
            Completed
            <input type="radio" name="status" value="Completed" />
          </label>
          <label className="radio">
            To do
            <input type="radio" name="status" value="Todo" />
          </label>
        </div>
      </div>
      <div className="form-group">
        <p className="form-label">Filter By Priority</p>
        <select className="form-priority" value={filterPriority} onChange={handlePriorityFilterChange} >
          <option value="None">None</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </>
  );
}

export default Filters;
