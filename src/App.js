import React from "react";
import Body from "./components/Body";
import TaskProvider from "./context/task-context";

export const App = () => {
  return (
    <TaskProvider>
      <Body />
    </TaskProvider>
  );
};

export default App;
