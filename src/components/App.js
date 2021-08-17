import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
function App() {
  const [selectCategory, setSelectCategory] = useState("All");
  const [tasks, setTask] = useState(TASKS);

  function handletSelectCategory(category) {
    setSelectCategory(category);
  }

  const filterTask = tasks.filter(
    (task) => selectCategory === "All" || task.category === selectCategory
  );

  function addHnadleNewTask(task) {
    setTask([...tasks, task]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        CATEGORIES={CATEGORIES}
        handletSelectCategory={handletSelectCategory}
      />

      <NewTaskForm
        CATEGORIES={CATEGORIES}
        addHnadleNewTask={addHnadleNewTask}
        handletSelectCategory={handletSelectCategory}
      />

      <TaskList TASKS={filterTask} />
    </div>
  );
}
export default App;
