import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function onSubmitTask(e) {
    e.preventDefault();
    onTaskFormSubmit({
      text,
      category,
    });

    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={onSubmitTask}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cate) => (
            <option key={cate}>{cate}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;
