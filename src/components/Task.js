import React from "react";

function Task({ text, category, deleteTask }) {
  // console.log(Category)
    // console.log(Text)

  function handleDelete() {
    deleteTask(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete} >X</button>
    </div>
  );
}

export default Task;
