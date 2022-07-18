import React, { useState } from "react";
import "./Form.css";
import Button from "../UI/Button/Button";
import FormInput from "./FormInput/FormInput";
import {
  useTasks,
  useUpdateTasks,
  useSelectedTask,
  useSetSelectedTask,
} from "../context/task-context";

/**@module Form */

/**
 * Form component
 * @component
 * @param {Object} props
 * @param {Function} props.isCreateTaskHandler
 * @param {boolean} props.isCreate
 * @returns {JSX.Element}
 */
const Form = (props) => {
  /**
   * @typedef {React.Context<any>} setSelectedTask
   * @const
   */
  const setSelectedTask = useSetSelectedTask();
  /**
   * @typedef {React.Context<any>} selectedTask
   * @const
   */
  const selectedTask = useSelectedTask();
  /**
   * @typedef {React.Context<any>} tasks
   * @const
   */
  const tasks = useTasks();
  /**
   * @typedef {React.Context<any>} setTasks
   * @const
   */
  const setTasks = useUpdateTasks();

  /**
   * React useState reference state - state for the values in the inputs of the form
   * @typedef {Object} values
   * @property {number} values.id
   * @property {string} values.projectName
   * @property {string} values.taskName
   * @property {string} values.status
   * @const
   */

  /**
   * React useState state setter - setter function for the values in the form
   * @callback setValues
   * @param {values} state
   * @function
   * @returns {void}
   */
  const [values, setValues] = useState({
    id: selectedTask ? selectedTask.id : "",
    projectName: selectedTask ? selectedTask.projectName : "",
    taskName: selectedTask ? selectedTask.taskName : "",
    status: selectedTask ? selectedTask.status : "",
  });

  /**
   * Array for the types of inputs which are in the form with their properties and validation patterns
   * @const
   * @typedef {Object[]} inputs
   */
  const inputs = [
    {
      id: 1,
      name: "id",
      type: "number",
      placeholder: "Id",
      errorMessage: "Id should be a number",
      label: "Id",
      pattern: "^[0-9]{1,16}$",
      required: true,
    },
    {
      id: 2,
      name: "projectName",
      type: "text",
      placeholder: "project name",
      errorMessage: "This field cannot be left empty.",
      label: "Project name",
      pattern: "^[A-Za-z0-9]{1,16}$",
      required: true,
    },
    {
      id: 3,
      name: "taskName",
      type: "text",
      placeholder: "Task name",
      errorMessage: "This field cannot be left empty.",
      pattern: "^[A-Za-z0-9]{1,16}$",
      label: "Task name",
      required: true,
    },
    {
      id: 4,
      name: "status",
      type: "text",
      placeholder: "Status",
      errorMessage: "You must choose a status for the task.",
      label: "Status",
      pattern: "inactive" || "active" || "inprogress",
      required: true,
    },
  ];

  /**
   * Sets the values from the input upon inputing
   * @typedef {Function} onChange
   * @param {HTMLElement} e
   * @function
   * @returns {void}
   */
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  /**
   * Updates the task upon clicking on the update button
   * @typedef {Function} updateTaskHandler
   * @returns {void}
   * @function
   */
  const updateTaskHandler = () => {
    const index = tasks.indexOf(selectedTask);

    tasks[index] = {
      id: values.id,
      projectName: values.projectName,
      taskName: values.taskName,
      status: values.status,
    };

    setTasks(tasks);
    setSelectedTask(null);
  };

  /**
   * Creates a new task by clicking on the create task button
   * @typedef {Function} createTaskHandler
   * @param {HTMLElement} e
   * @function
   * @returns {void}
   */
  const createTaskHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: values.id,
      projectName: values.projectName,
      taskName: values.taskName,
      status: values.status,
    };
    tasks.push(newTask);
    setTasks(tasks);

    props.isCreateTaskHandler();
  };
  /**
   * Deletes a task upon clicking on the delete task button
   * @typedef {Function} deleteTaskHandler
   * @returns {void}
   * @function
   */
  const deleteTaskHandler = () => {
    const index = tasks.indexOf(selectedTask);
    tasks.splice(index, 1);
    setTasks(tasks);

    setSelectedTask(null);
  };
  return (
    <div className="modal">
      <form
        onSubmit={props.isCreate ? createTaskHandler : updateTaskHandler}
        className="form"
      >
        <h1 className="title">
          {props.isCreate ? "Create Task" : "Update Task"}
        </h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {props.isCreate ? (
          <div className="buttons-create">
            <Button type="submit">Create Task</Button>
            <Button onClick={props.isCreateTaskHandler}>Close form</Button>
          </div>
        ) : (
          <div className="buttons-manage">
            <Button type="submit" className="update">
              Update Task
            </Button>
            <Button onClick={deleteTaskHandler} className="delete">
              Delete Task
            </Button>
            <Button
              onClick={() => {
                setSelectedTask(null);
              }}
            >
              Close form
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
