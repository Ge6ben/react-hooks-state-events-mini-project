import React from "react";
import Task from './Task';

function TaskList({TASKS}) {
  console.log(TASKS)
  return (
    <div className="tasks">
{

TASKS.map((task)=>(
  <Task  key={task.text } {...TASKS} />
))
}
</div>
);
}
export default TaskList;