import React, { useState, useContext } from "react";

const taskContext = React.createContext();
const updateTaskContext = React.createContext();

export const useTasks = () => {
  return useContext(taskContext);
};
export const useUpdateTasks = () => {
  return useContext(updateTaskContext);
};

const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      projectName: "kk",
      taskName: "pentest",
      status: "active",
    },
    {
      id: 2,
      projectName: "kk12",
      taskName: "pentest12312",
      status: "active",
    },
    {
      id: 3,
      projectName: "kk1222",
      taskName: "pentest",
      status: "in-progress",
    },
    {
      id: 4,
      projectName: "kk2",
      taskName: "pentest4",
      status: "inactive",
    },
  ]);

  return (
    <taskContext.Provider value={tasks}>
      <updateTaskContext.Provider value={setTasks}> {props.children} </updateTaskContext.Provider>
    </taskContext.Provider>
  );
};

export default TaskProvider;
