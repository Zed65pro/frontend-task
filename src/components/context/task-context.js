import React, { useState, useContext } from "react";
/**@module context */
const taskContext = React.createContext();
const updateTaskContext = React.createContext();
const selectedTaskContext = React.createContext();
const setSelectedTaskContext = React.createContext();

/**
 * tasks array context
 * @component
 * @returns {React.Context<any>}
 */
export const useTasks = () => {
  return useContext(taskContext);
};
/**
 * tasks setter context
 * @const
 * @returns {React.Context<any>}
 */
export const useUpdateTasks = () => {
  return useContext(updateTaskContext);
};
/**
 * selected task context
 * @const
 * @returns {React.Context<any>}
 */
export const useSelectedTask = () => {
  return useContext(selectedTaskContext);
};
/**
 * selected task setter context
 * @const
 * @returns {React.Context<any>}
 */
export const useSetSelectedTask = () => {
  return useContext(setSelectedTaskContext);
};

/**
 * context provider
 * @component
 * @param {Object} props
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
const TaskProvider = (props) => {
  /**
   * React useState reference state - state of tasks array
   * @typedef {array<Object>} tasks
   * @const
   */

  /**
   * React useState state setter - setter function for tasks state
   * @callback setTasks
   * @param {tasks} state
   * @const
   * @returns {void}
   */
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
    {
      id: 5,
      projectName: "Computing",
      taskName: "Documentation",
      status: "active",
    },
    {
      id: 6,
      projectName: "LLC",
      taskName: "doing nothing",
      status: "active",
    },
  ]);
  /**
   * React useState reference state - state of selected task
   * @typedef {Object} selectedTask
   * @property {number} selectedTask.id
   * @property {string} selectedTask.projectName
   * @property {string} selectedTask.taskName
   * @property {string} selectedTask.status
   * @const
   */

  /**
   * React useState state setter - setter function for selected task
   * @callback setSelectedTask
   * @param {isShowTasks} state
   * @function
   * @returns {void}
   */
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
