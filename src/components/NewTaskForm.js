import React , {useState}  from "react";

function NewTaskForm({ CATEGORIES ,   onTaskFormSubmit}) {

  const [txtState, setTxtState] = useState('')
const [categorystate, setcategorystate] = useState('Food')
  
  function changeCategory(e) {
   changeCategory(e.target.value);
 }

  function onSubmitTask(e) {
    e.preventDefault();
    onTaskFormSubmit(txtState, categorystate)
    setTxtState('')
    setcategorystate('Food')
 }
  return (
    <form className="new-task-form" onSubmit={ onSubmitTask}>
      
      <label>
        Details
        <input type="text" name="text" value={txtState} onChange={(e) => setTxtState(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category"  value={categorystate} onChange={(e) => setcategorystate(e.target.value)}>
          {
            CATEGORIES.map((category) => (
              <option onClick={changeCategory}  > {category} </option>
             ))
        }
         
        </select>
      </label>
      <input type="submit" value="Add task"  />
    </form>
  );
}

export default NewTaskForm;
