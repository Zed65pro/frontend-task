import React from "react";
import Body from "./components/pages/Body/Body";
import TaskProvider from "./components/context/task-context";

export const App = () => {
  return (
    <TaskProvider>
      <Body />
    </TaskProvider>
  );
};

export default App;
