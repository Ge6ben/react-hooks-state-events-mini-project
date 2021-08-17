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

  // function handletSelectCategory(category) {
  //   console.log(category);
  //   setSelectCategory(category);
  //   console.log(category);
  // }

  const filterTask = tasks.filter(
    (task) => selectCategory === "All" || task.category === selectCategory
  );

  function addTask(task) {
    setTask([...tasks, task]);
    console.log("============")
    console.log(tasks)
  }

  function deleteTask(deleteItem) {
    setTask( tasks.filter((item) => item.text !== deleteItem))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />

      <NewTaskForm
        categories={CATEGORIES.filter((item) => item !== 'All')}
        onTaskFormSubmit={addTask}
      />

      <TaskList tasks={filterTask} deleteTask={deleteTask}/>
    </div>
  );
}
export default App;
