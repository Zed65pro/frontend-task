import React, { useState } from "react";
import Button from "../UI/Button";
import TaskList from "./TaskList";
import Form from "./Form";
import { useSelectedTask } from "../context/task-context";

const Body = (props) => {
  const selectedTask = useSelectedTask();

  const [isShowTasks, setIsShowTasks] = useState(false);
  const [isCreateTask, setIsCreateTask] = useState(false);

  const showTaskHandler = () => {
    setIsShowTasks((prevState) => !prevState);
  };

  const isCreateTaskHandler = () => {
    setIsCreateTask((prevState) => !prevState);
  };
  return (
    <div>
      <Button onClick={showTaskHandler}>Show tasks</Button>
      <Button onClick={isCreateTaskHandler}>Create task</Button>
      {isCreateTask && (
        <Form isCreateTaskHandler={isCreateTaskHandler} isCreate={isCreateTask} />
      )}
      {selectedTask && <Form isCreate={isCreateTask} />}
      {isShowTasks && <TaskList />}
    </div>
  );
};

export default Body;
