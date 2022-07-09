import React, { useState } from "react";
import Button from "../UI/Button";
import TaskList from "./TaskList";
import Form from "./Form";

const Body = (props) => {
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
        <Form isCreateTaskHandler={isCreateTaskHandler} title={"Create Task"} tasks={props.tasks}/>
      )}
      {isShowTasks && <TaskList tasks={props.tasks} showTaskHandler={showTaskHandler} />}
    </div>
  );
};

export default Body;
