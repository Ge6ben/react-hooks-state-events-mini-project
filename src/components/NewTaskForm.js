import React from "react";

function NewTaskForm({ CATEGORIES ,  handletSelectCategory}) {
  console.log(CATEGORIES)
  
  function changeCategory(e) {


    changeCategory(e.target.value);
 }

  return (
    <form className="new-task-form" onSubmit>
      
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {
            CATEGORIES.map((category) => (
              <option onClick={changeCategory}  > {category} </option>
             ))
        }
         
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
