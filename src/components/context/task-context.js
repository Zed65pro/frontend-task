import React, { useState, useContext } from "react";

const taskContext = React.createContext();
const updateTaskContext = React.createContext();
const selectedTaskContext = React.createContext();
const setSelectedTaskContext = React.createContext();

export const useTasks = () => {
  return useContext(taskContext);
};
export const useUpdateTasks = () => {
  return useContext(updateTaskContext);
};

export const useSelectedTask = () => {
  return useContext(selectedTaskContext);
};

export const useSetSelectedTask = () => {
  return useContext(setSelectedTaskContext);
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
  const [selectedTask, setSelectedTask] = useState(null);
  return (
    <taskContext.Provider value={tasks}>
      <updateTaskContext.Provider value={setTasks}>
        <selectedTaskContext.Provider value={selectedTask}>
          <setSelectedTaskContext.Provider value={setSelectedTask}>
            {props.children}
          </setSelectedTaskContext.Provider>
        </selectedTaskContext.Provider>
      </updateTaskContext.Provider>
    </taskContext.Provider>
  );
};

export default TaskProvider;
