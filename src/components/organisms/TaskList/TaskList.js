import React from "react";
import Task from "../../molecules/Task/Task";
import "./TaskList.css";
import { useTasks } from "../../context/task-context";
/**@module organisms/TaskList */
/**
 * Shows all tasks in a table form
 * @component
 * @returns {JSX.Element}
 */
const TaskList = () => {

  /**
   * @typedef {React.Context<any>} tasks
   * @const
   */
  const tasks = useTasks();

  /**
   * @typedef {Function} mapTasks
   * @returns {void}
   * @function
   */
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
