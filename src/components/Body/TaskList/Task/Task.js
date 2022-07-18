import React from "react";
import "./Task.css";
import { useSetSelectedTask,useSelectedTask } from "../../../context/task-context";

const Task = (props) => {

  const selectedTask = useSelectedTask();
  const setSelectedTask = useSetSelectedTask();

  const isClickedHandler = () => {
    setSelectedTask(props.task);
  };

  const highlight = ()=>{
    if(selectedTask){
      return selectedTask.id === props.task.id? 'highlight': '';
    }
    return '';
  }
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
