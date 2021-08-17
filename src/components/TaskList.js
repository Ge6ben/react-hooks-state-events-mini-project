import React from "react";
import Task from "./Task";

function TaskList({ TASKS , deleteTask }) {
  console.log(TASKS);
  return (
    <div className="tasks">
      {
        TASKS.map((task) => (
        <Task key={task.text}  Text={task.text} Category={task.Category}  deleteTask={deleteTask}/>
        ))
      }
    </div>
  );
}
export default TaskList;
