import React, { useState } from "react";
import "./Form.css";
import Button from "../UI/Button";
import FormInput from "./FormInput";
import {
  useTasks,
  useUpdateTasks,
  useSelectedTask,
  useSetSelectedTask,
} from "../context/task-context";

const Form = (props) => {
  const setSelectedTask = useSetSelectedTask();
  const selectedTask = useSelectedTask();
  const tasks = useTasks();
  const setTasks = useUpdateTasks();

  const [values, setValues] = useState({
    id: selectedTask ? selectedTask.id : "",
    projectName: selectedTask ? selectedTask.projectName : "",
    taskName: selectedTask ? selectedTask.taskName : "",
    status: selectedTask ? selectedTask.status : "",
  });

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
      pattern: "inactive" || "active" || "in-progress",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
  const createTaskHandler = () => {
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
  const deleteTaskHandler = () => {
    const index = tasks.indexOf(selectedTask);
    tasks.splice(index, 1);
    setTasks(tasks);

    setSelectedTask(null);
  };
  return (
    <div className="modal">
      <div className="form">
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
            <Button onClick={createTaskHandler}>Create Task</Button>
            <Button onClick={props.isCreateTaskHandler}>Close form</Button>
          </div>
        ) : (
          <div className="buttons-manage">
            <Button onClick={updateTaskHandler} className="update">
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
      </div>
    </div>
  );
};

export default Form;
