import React from "react";
import Body from "./components/Body";
export const App = () => {


  
  const tasks = [
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
  ];

  

  return (
    <div>
      <Body tasks={tasks} />
    </div>
  );
};

export default App;
