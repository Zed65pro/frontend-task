import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import TaskList from "../../organisms/TaskList/TaskList";
import Form from "../../organisms/Form/Form";
import { useSelectedTask } from "../../context/task-context";
import "./Body.css";
/**@module pages/Body */
/**
 * This is the main body of the application which acts as a container for the other components
 * @component
 * @returns {JSX.Element}
 */
const Body = () => {
  const selectedTask = useSelectedTask();

  /**
   * React useState reference state - used to see if show task is clicked
   * @typedef {boolean} isShowTasks
   * @const
   */

  /**
   * React useState state setter - used to set the state of isShowTasks
   * @callback setIsShowTasks
   * @param {isShowTasks} state
   * @function
   * @returns {void}
   */
  const [isShowTasks, setIsShowTasks] = useState(false);
  /**
   * React useState reference state - used to show if create task button is clicked
   * @typedef {boolean} isCreateTask
   * @const
   */

  /**
   * React useState state setter - used to set the state of isCreateTask
   * @callback setIsCreateTask
   * @param {isShowTasks} state
   * @returns {void}
   * @function
   */
  const [isCreateTask, setIsCreateTask] = useState(false);

  /**
   * This function is used to set the value of isShowTasks to true/false
   * this is a handler function for show tasks button
   * @typedef {Function} showTaskHandler
   * @returns {void}
   * @function
   */
  const showTaskHandler = () => {
    setIsShowTasks((prevState) => !prevState);
  };

  /**
   * This function is used to set the value of isCreateTask to true/false
   * this is a handler function for create tasks button
   * @typedef {Function} isCreateTaskHandler
   * @returns {void}
   * @function
   */
  const isCreateTaskHandler = () => {
    setIsCreateTask((prevState) => !prevState);
  };
  return (
    <div className="main-page">
      <h1 className="title">
        Task Management Application
      </h1>
      <div>
        <Button onClick={showTaskHandler}>Show tasks</Button>
        <Button onClick={isCreateTaskHandler}>Create task</Button>
      </div>
      {isCreateTask && (
        <Form
          isCreateTaskHandler={isCreateTaskHandler}
          isCreate={isCreateTask}
        />
      )}
      {selectedTask && <Form isCreate={isCreateTask} />}
      {isShowTasks && <TaskList />}
    </div>
  );
};

export default Body;
