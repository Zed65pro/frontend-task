import React from "react";
import Task from "./Task/Task";
import "./TaskList.css";
import { useTasks } from "../../context/task-context";

const TaskList = (props) => {
  const tasks = useTasks();

  const mapTasks = () => {
    return tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
      />
    ));
  };

  return (
    <div>
      <table className="content-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Project Name</th>
            <th>Task Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{mapTasks()}</tbody>
      </table>
    </div>
  );
};

export default TaskList;
