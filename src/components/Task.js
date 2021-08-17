import React from "react";

function Task({ Text, Category, deleteTask }) {
  // console.log(Category)
  // console.log(Text)

  function handleDelete() {
    deleteTask(Text);
  }
  return (
    <div className="task">
      <div className="label">{Category}</div>
      <div className="text">{Text}</div>
      <button className="delete" onClick={handleDelete} >X</button>
    </div>
  );
}

export default Task;
