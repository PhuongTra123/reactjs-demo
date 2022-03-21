import React, { useEffect, useReducer, useRef, useState } from "react";
import "./styles.scss";

const Info = () => {
  const [avatar, setAvatar] = useState();

  //   INITSTATE USEREDUCER
  const initState = {
    job: "",
    jobs: [],
  };

  const inputRef = useRef()


  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  //   ACTION FUNCTION
  const setJob = (payload) => {
    return {
      type: "set_job",
      payload,
    };
  };
  const addJob = (payload) => {
    return {
      type: "add_job",
      payload,
    };
  };
  const deleteJob = (payload) => {
    return {
      type: "delete_job",
      payload,
    };
  };

  // REDUCER
  const reducer = (state, action) => {
    switch (action.type) {
      case "set_job":
        return {
          ...state,
          job: action.payload,
        };

      case "add_job":
        return {
          ...state,
          jobs: [...state.jobs, action.payload]
        };

      case "delete_job":
          const newJobs = [...state.jobs];
          newJobs.splice(action.payload, 1)
        return {
          ...state,
          jobs: newJobs
        };

      default:
        return state;
    }
  };

  // DISPATCH
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;


  const handleSubmit = () => {
      dispatch(addJob(job))
      dispatch(setJob(''))

      inputRef.current.focus();
  }

  return (
    <div className="information">
      <div className="img-preview">
        <h1 className="img-header">Choose profile image</h1>
        <input type="file" onChange={handlePreviewAvatar} />
        {avatar && <img className="img" src={avatar.preview} alt="" />}
      </div>

      <div className="information-list">
        <h1 className="information-header">To do</h1>
        <div className="information-add">
          <input
            className="information-input"
            ref={inputRef}
            type="text"
            placeholder="Enter information..."
            value={job}
            onChange={(e) => dispatch(setJob(e.target.value))}
          />
          <button className="add" onClick={handleSubmit}>Add</button>
        </div>
        <ul className="informationlist-item">
            {jobs.map((job,index) => (
                <li key={index} className="information-item">
                {" "}
                {job} <span onClick={() => dispatch(deleteJob(index))} className="delete">&times;</span>{" "}
              </li> 
            ))}
         
        </ul>
      </div> 
    </div>
  );
};

export default Info;
