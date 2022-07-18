import React from "react";
import "./Task.css";
import {
  useSetSelectedTask,
  useSelectedTask,
} from "../../../context/task-context";
/**@module Task */
/**
 * Individual task component
 * @component
 * @param {Object} props
 * @param {Object} props.task
 * @returns {JSX.Element}
 */
const Task = (props) => {
  /**
   * @const
   * @typedef {React.Context<any>} selectedTask
   */
  const selectedTask = useSelectedTask();
  /**
   * @typedef {React.Context<any>} setSelectedTask
   * @function
   */
  const setSelectedTask = useSetSelectedTask();

  /**
   * if a task is clicked, then selectedTask is set to it's values
   * @typedef {Function} isClickedHandler
   * @returns {void}
   * @function
   */
  const isClickedHandler = () => {
    setSelectedTask(props.task);
  };
  /**
   * Determines whether a task is a selectedTask to be highlighted
   * @typedef {Function} highlight
   * @returns {string}
   * @function
   */
  const highlight = () => {
    if (selectedTask) {
      return selectedTask.id === props.task.id ? "highlight" : "";
    }
    return "";
  };
  return (
    <tr className={`task ${highlight()}`} onClick={isClickedHandler}>
      <td>{props.task.id}</td>
      <td>{props.task.projectName}</td>
      <td>{props.task.taskName}</td>
      <td>{props.task.status}</td>
    </tr>
  );
};

export default Task;
