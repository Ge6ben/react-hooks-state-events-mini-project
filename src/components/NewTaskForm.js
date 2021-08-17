import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function onSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({
      text,
      category,
    });
  }

  return (
    <form className="new-task-form" onSubmit={onSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </label>
      <label>
        Category
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;
