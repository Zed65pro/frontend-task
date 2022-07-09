import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import "./Task.css";
const Task = (props) => {
  const [highlight, setHighlight] = useState("");

  const isClickedHandler = () => {
    setHighlight("highlight");
  };

  const closeFormHandler = () => {
    setHighlight("");
  };
  return (
    <React.Fragment>
      <tr className={`task ${highlight}`} onClick={isClickedHandler}>
        <td>{props.id}</td>
        <td>{props.projectName}</td>
        <td>{props.taskName}</td>
        <td>{props.status}</td>
      </tr>
      {highlight &&
        ReactDOM.createPortal(
          <Form
            title={"Update Task"}
            isCloseForm={closeFormHandler}
            tasks={props.tasks}
            task={props.task}
            showTaskHandler={props.showTaskHandler}
          />,
          document.querySelector("#modal")
        )}
    </React.Fragment>
  );
};

export default Task;