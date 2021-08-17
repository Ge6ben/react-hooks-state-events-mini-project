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

  function addNewTask(newTask) {
    setTask([...tasks, newTask]);
  }
  function onDeleteTask(deletedTask) {
    setTask(tasks.filter((task) => deletedTask !== task.text));
  }

  const displayTaskAferFilter = tasks.filter(
    (task) => selectCategory === "All" || task.category === selectCategory
  );

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        setSelectCategory={setSelectCategory}
        selectCategory={selectCategory}
      />

      <NewTaskForm
        categories={CATEGORIES.filter((cate) => cate !== "All")}
        onTaskFormSubmit={addNewTask}
      />

      <TaskList tasks={displayTaskAferFilter} deleteTask={onDeleteTask} />
    </div>
  );
}
export default App;
