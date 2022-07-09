import React from "react";
import Task from "./Task";
import "./TaskList.css";
const TaskList = (props) => {
  const mapTasks = () => {
    return props.tasks.map((task) => (
      <Task
        key={task.id} 
        tasks={props.tasks}
        task={task}
        id={task.id}
        projectName={task.projectName}
        taskName={task.taskName}
        status={task.status}
        showTaskHandler={props.showTaskHandler}
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
